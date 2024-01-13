# 定时任务

旧版在使用上有一些困难，很多人不熟悉多进程管理这块，在这块业务上耦合也比较严重，所以有问题，难于调试。新版本在使用上变得更加简单，只需要定义 `Command`即可。也不需要之前定义 `Task` 之类的单独类了。

第一步就是在后台添加定时执行的 `command` 指令，如下:

```php
declare (strict_types=1);

namespace catchAdmin\monitor\command;

class TestCommand extends Command
{
    protected $pid;

    protected function configure()
    {
        // 指令配置
        $this->setName('testTow')
            ->setDescription('test command');
    }

    protected function execute(Input $input, Output $output)
    {}
}
```

[![whcbXd.jpg](https://s1.ax1x.com/2020/09/18/whcbXd.jpg)](https://imgchr.com/i/whcbXd)
首先按照上图开启你的系统监控模块

在后台添加 `command` 指令即可，目前 `command` 支持在 `catch` 目录下的模块中 `command` 文件夹下自动载入

[![whg0ud.jpg](https://s1.ax1x.com/2020/09/18/whg0ud.jpg)](https://imgchr.com/i/whg0ud)

## 调度

设置每分钟调度一次，注意这里**必须是每分钟**

```shell
* * * * * cd /path-to-your-project && php think catch:schedule >> /dev/null 2>&1
```

## 自动载入 commands

在 CatchAdmin 中，command 都是支持自动载入的，只需要这这样实现就可以了. 继承 catcher\ModuleService, 实现 loadCommands 返回 NAMESPACE 和 存放 commands 的文件目录即可.

```php
namespace app\admin;

use catcher\ModuleService;

class AppService extends ModuleService
{


    public function loadRouteFrom()
    {
        // TODO: Implement loadRouteFrom() method.

    }

    public function loadCommands()
    {
        return [__NAMESPACE__, __DIR__ . DIRECTORY_SEPARATOR . 'command'];
    }

}
```

## cron 的表达式

```
// cron 表达式
 *    *    *    *    *
 -    -    -    -    -
 |    |    |    |    |
 |    |    |    |    |
 |    |    |    |    +----- day of week (0 - 6) (Sunday=0)
 |    |    |    +---------- month (1 - 12)
 |    |    +--------------- day of month (1 - 31)
 |    +-------------------- hour (0 - 23)
 +------------------------- min (0 - 59)
```

调用的任务类设置 `TestTask` 就完成了。感兴趣的话，就赶快试一试吧。

### 常用 Crontab 表达式示例

- `*/5 * * * *` 每 5 分钟执行一次
- `30 21 * * *` 每晚 21:30 执行一次
- `* 12-23 * * *` 下午每分钟执行一次
- `0 */2 * * *` 每 2 小时执行一次
- `* */2 * * *` 偶数小时每分钟执行一次
- `0 * * * *` 每小时执行一次
- `0 0 * * *` 每天执行一次
- `0 0 0 * *` 每月执行一次
- `0 0 0 0 1` 每个星期一执行一次

cron 表达式详细说明 [https://zh.wikipedia.org/wiki/Cron#例子](https://zh.wikipedia.org/wiki/Cron#例子)
