# Textarea

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->textarea('textarea', '文本域')->required();
})->labelWidth(120);
```
