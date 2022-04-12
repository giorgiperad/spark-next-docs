(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{390:function(t,a,s){"use strict";s.r(a);var e=s(40),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[t._v("#")]),t._v(" Upgrade")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#upgrading-to-spark-stripe-2-0-from-1-x"}},[t._v("Upgrading to Spark (Stripe) 2.0 From 1.x")]),s("ul",[s("li",[s("a",{attrs:{href:"#minimum-versions"}},[t._v("Minimum Versions")])]),s("li",[s("a",{attrs:{href:"#stripe-api-version"}},[t._v("Stripe API Version")])]),s("li",[s("a",{attrs:{href:"#vatcalculator-3-x"}},[t._v("VatCalculator 3.x")])]),s("li",[s("a",{attrs:{href:"#renaming-plans-to-prices"}},[t._v('Renaming "Plans" To Prices')])]),s("li",[s("a",{attrs:{href:"#new-payment-methods-support"}},[t._v("New Payment Methods Support")])]),s("li",[s("a",{attrs:{href:"#stripe-product-support"}},[t._v("Stripe Product Support")])])])]),s("li",[s("a",{attrs:{href:"#upgrading-to-spark-stripe-v1-0-5"}},[t._v("Upgrading To Spark (Stripe) v1.0.5")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"upgrading-to-spark-stripe-2-0-from-1-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-spark-stripe-2-0-from-1-x"}},[t._v("#")]),t._v(" Upgrading to Spark (Stripe) 2.0 From 1.x")]),t._v(" "),s("p",[t._v("Spark (Stripe) 2.0 primarily provides an upgrade from Cashier 12.x to Cashier 13.x. As such, in addition to the upgrade guide below, please consult the "),s("a",{attrs:{href:"https://github.com/laravel/cashier-stripe/blob/13.x/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cashier 13 upgrade guide"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"minimum-versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimum-versions"}},[t._v("#")]),t._v(" Minimum Versions")]),t._v(" "),s("p",[t._v("The following required dependency versions have been updated:")]),t._v(" "),s("ul",[s("li",[t._v("The minimum Cashier Stripe version is now v13.0")]),t._v(" "),s("li",[t._v("The minimum Laravel version is now v9.0")]),t._v(" "),s("li",[t._v("The minimum PHP version is now v8.0")]),t._v(" "),s("li",[t._v("The minimum Stripe SDK version is now v7.39")]),t._v(" "),s("li",[t._v("The minimum VatCalculator version is now v3.0")])]),t._v(" "),s("h3",{attrs:{id:"stripe-api-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stripe-api-version"}},[t._v("#")]),t._v(" Stripe API Version")]),t._v(" "),s("p",[t._v("The default Stripe API version for Cashier 13.x is "),s("code",[t._v("2020-08-27")]),t._v(".")]),t._v(" "),s("p",[t._v("If you use the Stripe SDK directly, make sure to properly test your integration after updating.")]),t._v(" "),s("h4",{attrs:{id:"upgrading-your-stripe-webhook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-your-stripe-webhook"}},[t._v("#")]),t._v(" Upgrading Your Stripe Webhook")]),t._v(" "),s("p",[t._v("You should ensure your Stripe webhook operates on the same API version as Spark's underlying API version used by Cashier. To do so, you may use the "),s("code",[t._v("cashier:webhook")]),t._v(" command from your production environment to create a new webhook that matches Cashier's Stripe API version:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan cashier:webhook --disabled\n")])])]),s("p",[t._v("This will create a new webhook with the same Stripe API version as Cashier "),s("a",{attrs:{href:"https://dashboard.stripe.com/webhooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("in your Stripe dashboard"),s("OutboundLink")],1),t._v(". The webhook will be immediately disabled so it doesn't interfere with your existing production application until you are ready to enable it. By default, the webhook will be created using the "),s("code",[t._v("APP_URL")]),t._v(" environment variable to determine the proper URL for your application. If you need to use a different URL, you can use the "),s("code",[t._v("--url")]),t._v(" flag when invoking the command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan cashier:webhook --disabled --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/spark/webhook"')]),t._v("\n")])])]),s("p",[t._v("You may use the following upgrade checklist to properly enable to the new webhook:")]),t._v(" "),s("ol",[s("li",[t._v("If you have webhook signature verification enabled, disable it on production by temporarily removing the "),s("code",[t._v("STRIPE_WEBHOOK_SECRET")]),t._v(" environment variable.")]),t._v(" "),s("li",[t._v("Add any extra Stripe events your application requires to the new webhook in your Stripe dashboard.")]),t._v(" "),s("li",[t._v("Disable the old webhook in your Stripe dashboard.")]),t._v(" "),s("li",[t._v("Enable the new webhook in your Stripe dashboard.")]),t._v(" "),s("li",[t._v("Re-enable the new webhook secret by re-adding the "),s("code",[t._v("STRIPE_WEBHOOK_SECRET")]),t._v(" environment variable in production with the secret from the new webhook.")]),t._v(" "),s("li",[t._v("Remove the old webhook in your Stripe dashboard.")])]),t._v(" "),s("p",[t._v("After following this process, your new webhook will be active and ready to receive events.")]),t._v(" "),s("h3",{attrs:{id:"vatcalculator-3-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vatcalculator-3-x"}},[t._v("#")]),t._v(" VatCalculator 3.x")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://github.com/driesvints/vat-calculator",target:"_blank",rel:"noopener noreferrer"}},[t._v("VatCalculator"),s("OutboundLink")],1),t._v(" package utilized by Spark has been upgraded to its latest major version. While we do not anticipate any breaking changes from this upgrade, you might want to review this package's "),s("a",{attrs:{href:"https://github.com/driesvints/vat-calculator/blob/3.x/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("upgrade guide"),s("OutboundLink")],1),t._v(", specifically the section on "),s("a",{attrs:{href:"https://github.com/driesvints/vat-calculator/blob/3.x/UPGRADE.md#removed-countries",target:"_blank",rel:"noopener noreferrer"}},[t._v("removed countries"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"renaming-plans-to-prices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renaming-plans-to-prices"}},[t._v("#")]),t._v(' Renaming "Plans" To Prices')]),t._v(" "),s("p",[t._v('To accommodate Stripe\'s phasing out of the "Plans" API, we\'ve made the choice to partially migrate away from the "Plans" terminology. Because of this, the '),s("code",[t._v("stripe_plan")]),t._v(" columns on the "),s("code",[t._v("subscriptions")]),t._v(" and "),s("code",[t._v("subscription_items")]),t._v(" tables have been renamed to "),s("code",[t._v("stripe_price")]),t._v(".  You will need to write a migration to rename these columns:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subscriptions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Blueprint "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renameColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'stripe_plan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'stripe_price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nSchema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subscription_items'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Blueprint "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renameColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'stripe_plan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'stripe_price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Running this migration requires you to "),s("a",{attrs:{href:"https://laravel.com/docs/migrations#renaming-columns",target:"_blank",rel:"noopener noreferrer"}},[t._v("install the "),s("code",[t._v("doctrine/dbal")]),t._v(" package"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"new-payment-methods-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-payment-methods-support"}},[t._v("#")]),t._v(" New Payment Methods Support")]),t._v(" "),s("p",[t._v("Cashier v13 supports new payment methods. Because of this, the "),s("code",[t._v("card")]),t._v(" columns in the database have been renamed to accommodate for all types of payment methods. You will need to write a migration to rename the billable model table's "),s("code",[t._v("card_brand")]),t._v(", "),s("code",[t._v("card_last_four")]),t._v(" and "),s("code",[t._v("card_expiration")]),t._v(" columns accordingly:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Blueprint "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renameColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'card_brand'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pm_type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renameColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'card_last_four'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pm_last_four'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renameColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'card_expiration'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pm_expiration'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Running this migration requires you to "),s("a",{attrs:{href:"https://laravel.com/docs/migrations#renaming-columns",target:"_blank",rel:"noopener noreferrer"}},[t._v("install the "),s("code",[t._v("doctrine/dbal")]),t._v(" package"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"stripe-product-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stripe-product-support"}},[t._v("#")]),t._v(" Stripe Product Support")]),t._v(" "),s("p",[t._v("PR: https://github.com/laravel/cashier-stripe/pull/1185")]),t._v(" "),s("p",[t._v("Cashier Stripe v13 includes support for inspecting Stripe Product identifiers. To provide support for this feature, a new "),s("code",[t._v("stripe_product")]),t._v(" column should be added to the "),s("code",[t._v("subscription_items")]),t._v(" table:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subscription_items'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Blueprint "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'stripe_product'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nullable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'stripe_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If you would like to make use of the new "),s("code",[t._v("onProduct")]),t._v(" & "),s("code",[t._v("subscribedToProduct")]),t._v(" methods on your billable model, you should ensure the records in the "),s("code",[t._v("subscription_items")]),t._v(" have their "),s("code",[t._v("stripe_product")]),t._v(" column filled with the correct Product ID from Stripe.")]),t._v(" "),s("h2",{attrs:{id:"upgrading-to-spark-stripe-v1-0-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-spark-stripe-v1-0-5"}},[t._v("#")]),t._v(" Upgrading To Spark (Stripe) v1.0.5")]),t._v(" "),s("h4",{attrs:{id:"updating-the-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-configuration-file"}},[t._v("#")]),t._v(" Updating The Configuration File")]),t._v(" "),s("p",[t._v("Spark (Stripe) v1.0.5 introduces a new format for enabling features in the configuration file. To use the new format, add the following lines to your "),s("code",[t._v("config/spark.php")]),t._v(" configuration file:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Spark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Features")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'features'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Features::euVatCollection(['home-country' => 'BE']),")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Features::receiptEmails(['custom-addresses' => true]),")]),t._v("\n    Features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentNotificationEmails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("Next, uncomment the features you want to use in your application and remove the old corresponding configuration keys:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("collects_eu_vat")])]),t._v(" "),s("li",[s("code",[t._v("sends_receipt_emails")])]),t._v(" "),s("li",[s("code",[t._v("sends_payment_notification_emails")])])]),t._v(" "),s("h4",{attrs:{id:"collecting-billing-email-addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collecting-billing-email-addresses"}},[t._v("#")]),t._v(" Collecting Billing Email Addresses")]),t._v(" "),s("p",[t._v("Spark (Stripe) 1.0.5 introduces the ability to email receipts to a custom billing address that the customer provides. This is typically used to email receipts directly to an accountant.")]),t._v(" "),s("p",[t._v("To support this feature, you need to create a new migration in your application and add the following schema modification in the migration's "),s("code",[t._v("up()")]),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("up")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'receipt_emails'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Blueprint "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'receipt_emails'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'stripe_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Make sure to run the migration against the table that corresponds to your billable model.")]),t._v(" "),s("p",[t._v("To enable the feature, uncomment the "),s("code",[t._v("Features::receiptEmails()")]),t._v(" line in your "),s("code",[t._v("config/spark.php")]),t._v(" configuration file:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'features'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Features::euVatCollection(['home-country' => 'BE']),")]),t._v("\n    Features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("receiptEmails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'custom-addresses'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentNotificationEmailsSending")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);