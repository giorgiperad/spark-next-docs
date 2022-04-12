(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{366:function(t,a,s){"use strict";s.r(a);var n=s(40),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"customization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#branding"}},[t._v("Branding")]),s("ul",[s("li",[s("a",{attrs:{href:"#brand-logo"}},[t._v("Brand Logo")])]),s("li",[s("a",{attrs:{href:"#brand-color"}},[t._v("Brand Color")])]),s("li",[s("a",{attrs:{href:"#font"}},[t._v("Font")])])])]),s("li",[s("a",{attrs:{href:"#localization"}},[t._v("Localization")])]),s("li",[s("a",{attrs:{href:"#migrations"}},[t._v("Migrations")])]),s("li",[s("a",{attrs:{href:"#webhooks"}},[t._v("Webhooks")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"branding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#branding"}},[t._v("#")]),t._v(" Branding")]),t._v(" "),s("p",[t._v("Although Spark's billing portal is intended to be an isolated part of your application that is entirely managed by Spark, you can make some small customizations to the branding logo and color used by Spark.")]),t._v(" "),s("h3",{attrs:{id:"brand-logo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brand-logo"}},[t._v("#")]),t._v(" Brand Logo")]),t._v(" "),s("p",[t._v("To customize the logo used at the top left of the Spark billing portal, you may specify a configuration value for the "),s("code",[t._v("brand.logo")]),t._v(" configuration item within your application's "),s("code",[t._v("config/spark.php")]),t._v(" configuration file. This configuration value should contain an absolute path to the SVG file of the logo you would like to use:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'brand'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'logo'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("realpath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/../public/img/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("SVG Sizing")]),t._v(" "),s("p",[t._v("You may need to adjust the size and width of your SVG logo by modifying its width in the SVG file itself.")])]),t._v(" "),s("h3",{attrs:{id:"brand-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brand-color"}},[t._v("#")]),t._v(" Brand Color")]),t._v(" "),s("p",[t._v("To customize the color used as the background color of the button elements within the Spark billing portal, you may specify a value for the "),s("code",[t._v("brand.color")]),t._v(" configuration item within your application's "),s("code",[t._v("config/spark.php")]),t._v(" configuration file. This configuration value should be a valid hex code or correspond to a background color offered by the "),s("a",{attrs:{href:"https://tailwindcss.com/docs/customizing-colors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tailwind CSS framework"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'brand'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'color'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'bg-indigo-600'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'color'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'#c5b358'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"font"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font"}},[t._v("#")]),t._v(" Font")]),t._v(" "),s("p",[t._v("To customize the font used by the Spark billing portal, you should export Spark's views using the "),s("code",[t._v("vendor:publish")]),t._v(" Artisan command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan vendor:publish --tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("spark-views\n")])])]),s("p",[t._v("Next, within the "),s("code",[t._v("resources/views/vendor/spark/app.blade.php")]),t._v(" template, you may define your own "),s("code",[t._v("font-sans")]),t._v(" CSS class at the bottom of the templates "),s("code",[t._v("head")]),t._v(" section:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...... --\x3e")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".font-sans")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your Custom Font'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"localization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[t._v("#")]),t._v(" Localization")]),t._v(" "),s("p",[t._v("You may localize / translate all of the text within the Spark billing portal. To publish the Spark localization file, you may use the "),s("code",[t._v("vendor:publish")]),t._v(" Artisan command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan vendor:publish --tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("spark-lang\n")])])]),s("p",[t._v("This command will publish a "),s("code",[t._v("resources/lang/spark/en.json")]),t._v(" file containing translation keys and values for the English language. You may copy this file and translate it to the language of your choice. For more information on how to use Laravel's translation features, please consult the "),s("a",{attrs:{href:"https://laravel.com/docs/localization#using-translation-strings-as-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel localization documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"migrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),s("p",[t._v("Most commonly, applications bill individual users for monthly and yearly subscription plans. However, your application may choose to bill some other type of model, such as a team, organization, band, etc.")]),t._v(" "),s("p",[t._v("In that case, you should add "),s("code",[t._v("Spark::ignoreMigrations()")]),t._v(" in the register method of your application's "),s("code",[t._v("App\\Providers\\SparkServiceProvider")]),t._v(" class:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Spark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Spark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SparkServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Register any application services.\n     *\n     * @return void\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Spark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ignoreMigrations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Next, you should publish the Spark migrations by running the "),s("code",[t._v("vendor:publish")]),t._v(" Artisan command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan vendor:publish --tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spark-migrations"')]),t._v("\n")])])]),s("p",[t._v("Finally, you should inspect the published migrations and update the "),s("code",[t._v("2019_05_03_000001_add_spark_columns_to_users_table.php")]),t._v(" file to add the columns needed by Spark to the table that will be used by your application's billable model.")]),t._v(" "),s("h2",{attrs:{id:"webhooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhooks"}},[t._v("#")]),t._v(" Webhooks")]),t._v(" "),s("p",[t._v("Spark and Cashier automatically handle subscription cancellations for failed charges and other common Stripe webhook events. However, if you have additional webhook events you would like to handle, you may do so by extending the Spark webhook controller.")]),t._v(" "),s("p",[t._v("Your controller's method names should correspond to Cashier's controller conventions. Specifically, methods should be prefixed with "),s("code",[t._v("handle")]),t._v(' and the "camel case" name of the webhook you wish to handle. For example, if you wish to handle the '),s("code",[t._v("invoice.payment_succeeded")]),t._v(" webhook, you should add a "),s("code",[t._v("handleInvoicePaymentSucceeded")]),t._v(" method to the controller:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Spark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WebhookController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" SparkWebhookController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebhookController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SparkWebhookController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Handle invoice payment succeeded.\n     *\n     * @param  array  $payload\n     * @return \\Symfony\\Component\\HttpFoundation\\Response\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleInvoicePaymentSucceeded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handle the incoming event...")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleInvoicePaymentSucceeded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("p",[t._v("Next, define a route to your webhook controller within your application's "),s("code",[t._v("routes/web.php")]),t._v(" file. This will overwrite the default route registered by Spark's service provider:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WebhookController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/spark/webhook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WebhookController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'handleWebhook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Finally, since Stripe webhooks need to bypass Laravel's CSRF protection, be sure to list the URI as an exception in your application's "),s("code",[t._v("App\\Http\\Middleware\\VerifyCsrfToken")]),t._v(" middleware or list the route outside of the "),s("code",[t._v("web")]),t._v(" middleware group:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$except")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'spark/webhook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);