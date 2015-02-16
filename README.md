# Advanced router for Polymer

Change multiple page sections dynamically based on application state. Easily bind url params to your elements.
Designed for single page applications -SPA using [Polymer](https://www.polymer-project.org/).

## Why app-states

app-states allows you to define application states and updatable page sections independently.
With the support of nested states and model inheritance only required sections are updated.
This is the best scenario for real single page applications.

Features
- Declarative application states using web components.
- Nested states supporting inheritance.
- Custom page sections and dynamic content loading.
- Automatic data binding to url params and custom models.

Online demo http://kalitte.github.io/polymer-router-demo/

## Getting stared

New to app-states ? Just have a look at [Articles](http://kalitte.github.io/polymer-router-demo/#/articles) and [Account](http://kalitte.github.io/polymer-router-demo/#/account) demo.

## Installation
[Download](https://github.com/Kalitte/app-states) or run `bower install app-states --save`.

## Configuration
app-states uses the Polymer library. Make sure you have [webcomponents.js](http://webcomponents.org/polyfills/) and [polymer.html](https://www.polymer-project.org/) included in your page.

        ```html
                  &lt;!doctype html&gt;
          &lt;html&gt;

          &lt;head&gt;
            &lt;link rel=&quot;import&quot; href=&quot;/bower_components/app-states/app-states.html&quot;&gt;
          &lt;/head&gt;

          &lt;body unresolved&gt;

            &lt;!-- Define sections you want to load dynamically --&gt;
            &lt;section id=&quot;nav&quot; is=&quot;states-section&quot;&gt;&lt;/section&gt;
            &lt;section id=&quot;page&quot; is=&quot;states-section&quot;&gt;&lt;/section&gt;

            &lt;!-- Define application states --&gt;
            &lt;app-states&gt;
              &lt;app-state id=&quot;home&quot; url=&quot;/&quot;&gt;
                &lt;template target=&quot;#nav&quot; is=&quot;states-template&quot;&gt;
                  &lt;!-- When url is / load this content into #nav --&gt;
                &lt;/template&gt;

                &lt;template target=&quot;#page&quot; is=&quot;states-template&quot;&gt;
                  &lt;!-- When url is / load this content into #page --&gt;
                &lt;/template&gt;

                &lt;app-state id=&quot;login&quot;&gt;
                  &lt;template target=&quot;#page&quot; is=&quot;states-template&quot;&gt;
                    &lt;!-- When url is /login load this content into #page --&gt;
                  &lt;/template&gt;
                  &lt;!-- Inherit #nav content from home --&gt;
                &lt;/app-state&gt;
              &lt;/app-state&gt;
            &lt;/app-states&gt;

          &lt;/body&gt;

          &lt;/html&gt;

        ```

