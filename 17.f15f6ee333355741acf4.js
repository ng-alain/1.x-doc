(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{HUck:function(a,e,n){"use strict";n.r(e);var l=n("CcnG"),c=n("r45k"),o=function(){this.item={cols:1,urls:{"zh-CN":"packages/schematics/docs/add.md"},content:{"zh-CN":{content:'<article><h2 id="\u547d\u4ee4\u683c\u5f0f">\u547d\u4ee4\u683c\u5f0f<a onclick="window.location.hash = \'\u547d\u4ee4\u683c\u5f0f\'" class="anchor">#</a></h2><pre class="hljs language-bash"><code>ng add ng-alain &lt;project name></code></pre><h2 id="\u989d\u5916\u53c2\u6570">\u989d\u5916\u53c2\u6570<a onclick="window.location.hash = \'\u989d\u5916\u53c2\u6570\'" class="anchor">#</a></h2><table><thead><tr><th>\u53c2\u6570\u540d</th><th>\u9ed8\u8ba4\u503c</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>--form</code></td><td><code>true</code></td><td>\u662f\u5426\u9700\u8981\u52a8\u6001\u8868\u5355</td></tr><tr><td><code>--mock</code></td><td><code>true</code></td><td>\u662f\u5426\u9700\u8981 mock \u529f\u80fd</td></tr><tr><td><code>--hmr</code></td><td><code>true</code></td><td>\u662f\u5426\u9700\u8981 hmr \u70ed\u66ff\u6362</td></tr><tr><td><code>--codeStyle</code></td><td><code>false</code></td><td>\u662f\u5426\u9700\u8981\u4ee3\u7801\u98ce\u683c</td></tr><tr><td><code>--i18n</code></td><td><code>false</code></td><td>\u662f\u5426\u9700\u8981\u56fd\u9645\u5316\u652f\u6301</td></tr><tr><td><code>--g2</code></td><td><code>false</code></td><td>\u662f\u5426\u9700\u8981 G2 \u56fe\u8868</td></tr><tr><td><code>--npm</code></td><td><code>false</code></td><td>\u662f\u5426\u9700\u8981\u6dd8\u5b9d\u955c\u50cf\u914d\u7f6e\u6587\u4ef6</td></tr></tbody></table><p>\u4f8b\u5982\u751f\u6210\u4e00\u4e2a\u5e26\u6709\u56fd\u9645\u5316\u548cHMR\u70ed\u66ff\u6362\u9879\u76ee\uff1a</p><pre class="hljs language-bash"><code>ng add ng-alain demo --i18n --hmr</code></pre><p>\u67e5\u770b\u66f4\u591a<a href="/cli/plugin" data-url="/cli/plugin">\u63d2\u4ef6</a>\u3002</p></article>',meta:{order:10,title:"\u521b\u5efa\u811a\u624b\u67b6",type:"Documents"},toc:[{href:"#\u547d\u4ee4\u683c\u5f0f",title:"\u547d\u4ee4\u683c\u5f0f",h:2},{href:"#\u989d\u5916\u53c2\u6570",title:"\u989d\u5916\u53c2\u6570",h:2}]}},demo:!1},this.codes=[]},t=function(){this.item={cols:1,urls:{"zh-CN":"packages/schematics/docs/default.md"},content:{"zh-CN":{content:'<article><p>ng-alain \u63d0\u4f9b\u8bf8\u591a\u751f\u6210\u6a21\u5757\u3001\u9875\u6a21\u677f\uff0c\u4f46\u5b9e\u9645\u4e0a\u7ee7\u627f\u4e86\u539f\u751f Angular CLI \u7ec4\u4ef6\u9875\u7684\u4e00\u4e9b\u53c2\u6570\uff0c\u4f8b\u5982\uff1a<code>spec</code> \u8868\u793a\u662f\u5426\u751f\u6210\u6d4b\u8bd5\u9875\u3001<code>flat</code> \u8868\u793a\u6241\u5e73\u76ee\u5f55\u3001<code>inline-template</code> \u8868\u793a\u5185\u8054\u6a21\u677f\u5185\u5bb9\u7b49\u3002</p><p>\u7136\u800c\uff0c\u5bf9\u4e8e\u8fd9\u4e9b\u53c2\u6570\u6211\u4eec\u6ca1\u6709\u5fc5\u8981\u6bcf\u4e00\u6b21\u6267\u884c\u547d\u4ee4\u65f6\u90fd\u5199\u4e00\u904d\uff0c\u53ef\u4ee5\u901a\u8fc7 <code>angular.json</code> \u5bf9\u53c2\u6570\u9884\u8bbe\u3002</p><p>\u4f8b\u5982\uff1a</p><pre class="hljs language-json"><code>// angular.json\n{\n  "schematics": {\n    "ng-alain:module": {\n      "routing": true,\n      "spec": false\n    },\n    "ng-alain:list": {\n      "spec": false\n    },\n    "ng-alain:edit": {\n      "spec": false,\n      "modal": true\n    },\n    "ng-alain:view": {\n      "spec": false,\n      "modal": true\n    },\n    "ng-alain:curd": {\n      "spec": false\n    },\n    "@schematics/angular:module": {\n      "routing": true,\n      "spec": false\n    },\n    "@schematics/angular:component": {\n      "spec": false,\n      "flat": false,\n      "inlineStyle": true,\n      "inlineTemplate": false\n    },\n    "@schematics/angular:directive": {\n      "spec": false\n    },\n    "@schematics/angular:service": {\n      "spec": false\n    }\n  }\n}</code></pre><p>\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4e0b\u5217\u547d\u4ee4\u6765\u83b7\u53d6\u6240\u6709\u53c2\u6570\u63cf\u8ff0\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:list --help</code></pre></article>',meta:{order:90,title:"\u9ed8\u8ba4\u53c2\u6570",type:"Documents"},toc:[]}},demo:!1},this.codes=[]},d=function(){this.item={cols:1,urls:{"zh-CN":"packages/schematics/docs/faq.md"},content:{"zh-CN":{content:'<article><h2 id="\u4e3a\u4ec0\u4e48\u4e0d\u53ef\u4ee5\u4f7f\u7528-cnpm">\u4e3a\u4ec0\u4e48\u4e0d\u53ef\u4ee5\u4f7f\u7528 cnpm<a onclick="window.location.hash = \'\u4e3a\u4ec0\u4e48\u4e0d\u53ef\u4ee5\u4f7f\u7528-cnpm\'" class="anchor">#</a></h2><p>\u4f7f\u7528 <code>cnpm</code> \u5b89\u88c5\u4f9d\u8d56\u5305\uff0c\u4f1a\u9047\u5230\u65e0\u6cd5\u627e\u5230\u6837\u5f0f\u6587\u4ef6\u3002\u8fd9\u662f\u7531\u4e8e <code>cnpm</code> \u91c7\u7528\u7684\u662f\u8f6f\u94fe\u63a5\u8def\u5f84\uff0c\u5bfc\u81f4 <code>ng-zorro-antd</code> \u6587\u4ef6\u5939\u540d\u6709\u6240\u53d8\u52a8\uff0c\u56e0\u6b64\u5efa\u8bae\u6539\u7528 <code>npm</code> \u5b89\u88c5\u4f9d\u8d56\u5305\u3002</p><h2 id="\u4e3a\u4ec0\u4e48\u964d\u7ea7-Less">\u4e3a\u4ec0\u4e48\u964d\u7ea7 Less<a onclick="window.location.hash = \'\u4e3a\u4ec0\u4e48\u964d\u7ea7-Less\'" class="anchor">#</a></h2><blockquote><p>\u9650 <code>@angular-devkit/build-angular &lt; 0.7.5</code></p></blockquote><p>\u76ee\u524dAngular6\u9700\u8981\u964d\u7ea7 less \uff08<a target="_blank" href="https://github.com/angular/angular-cli/issues/10430" data-url="https://github.com/angular/angular-cli/issues/10430">#10430</a>\uff09\u624d\u80fd\u4f7f\u7528 ng-zorro-antd\uff0c\u82e5\u6267\u884c <code>ng add ng-alain</code> \u8fc7\u7a0b\u4e2d\u4f9d\u7136\u65e0\u6548\uff0c\u53ef\u5148 <strong>\u5220\u9664</strong> <code>node_modules</code>\u3001<code>package-lock.json</code> \u5e76\u91cd\u65b0 <code>npm i</code>\u3002</p><p>\u82e5\u4f7f\u7528 <code>yarn</code> \u6765\u5b89\u88c5\u4f9d\u8d56\u5305\uff0c\u53ef\u80fd\u9700\u8981\u901a\u8fc7\u6307\u4ee4\u6765\u4fee\u590d\u5176\u4ed6\u4f9d\u8d56\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:plugin yarn</code></pre><h2 id="\u9047\u5230\u7f51\u7edc\u95ee\u9898\u600e\u4e48\u529e">\u9047\u5230\u7f51\u7edc\u95ee\u9898\u600e\u4e48\u529e<a onclick="window.location.hash = \'\u9047\u5230\u7f51\u7edc\u95ee\u9898\u600e\u4e48\u529e\'" class="anchor">#</a></h2><p>\u53ef\u4ee5\u4f7f\u7528 <a target="_blank" href="https://www.npmjs.com/package/nrm" data-url="https://www.npmjs.com/package/nrm">nrm</a> \u5e76\u5207\u6362\u56fd\u5185NPM\u955c\u50cf\u8fdb\u884c\u52a0\u901f\u3002</p><p>\u6216\u8005\u4f7f\u7528\u4f7f\u7528\u63d2\u4ef6\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:plugin npm</code></pre><h2 id="no-such-file-or-directory">no such file or directory<a onclick="window.location.hash = \'no-such-file-or-directory\'" class="anchor">#</a></h2><p>\u8fd9\u4e2a\u95ee\u9898\u5f88\u96be\u89e3\u91ca\uff0cnpm \u6709\u4e00\u4e2a\u957f\u697c <a target="_blank" href="https://github.com/npm/npm/issues/17444#issuecomment-393761515" data-url="https://github.com/npm/npm/issues/17444#issuecomment-393761515">#17444</a>\uff0c\u5e76\u4e14\u6700\u540e\u7ed9\u51fa\u4e00\u79cd\u52c9\u5f3a\u7b54\u6848\uff1a</p><ol><li><p>\u786e\u4fdd\u5b89\u88c5\u6700\u65b0 npm \u7248\u672c\uff1a<code>npm i -g npm</code></p></li><li><p>\u5220\u9664 <code>node_modules</code> \u548c <code>package-lock.json</code></p></li><li><p><code>npm i</code></p></li></ol><p>\u6700\u540e\uff0c\u4f9d\u7136\u4e0d\u884c\u5c31\u518d\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\uff01</p></article>',meta:{order:100,title:"\u5e38\u89c1\u95ee\u9898",type:"Documents"},toc:[{href:"#\u4e3a\u4ec0\u4e48\u4e0d\u53ef\u4ee5\u4f7f\u7528-cnpm",title:"\u4e3a\u4ec0\u4e48\u4e0d\u53ef\u4ee5\u4f7f\u7528 cnpm",h:2},{href:"#\u4e3a\u4ec0\u4e48\u964d\u7ea7-Less",title:"\u4e3a\u4ec0\u4e48\u964d\u7ea7 Less",h:2},{href:"#\u9047\u5230\u7f51\u7edc\u95ee\u9898\u600e\u4e48\u529e",title:"\u9047\u5230\u7f51\u7edc\u95ee\u9898\u600e\u4e48\u529e",h:2},{href:"#no-such-file-or-directory",title:"no such file or directory",h:2}]}},demo:!1},this.codes=[]},i=function(){this.item={cols:1,urls:{"zh-CN":"packages/schematics/docs/generate.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p><code>ng generate</code>\uff08\u7b80\u5199\uff1a<code>ng g</code>\uff09\u7528\u4e8e\u751f\u6210\u4e1a\u52a1\u7ec4\u4ef6\u9875\uff0c\u9ed8\u8ba4 Angular \u6240\u63d0\u4f9b\u7684\u6a21\u677f\u8ddf ng-alain \u6240\u9700\u8981\u7684\u4f1a\u6709\u4e00\u4e9b\u4e0d\u540c\uff0c\u4f8b\u5982\u6211\u4eec\u5e0c\u671b\u751f\u6210\u4e00\u4e2a\u6a21\u5757\u65f6\u5e94\u8be5\u5305\u62ec\u5bfc\u5165 <code>SharedModule</code>\u3002</p><p>ng-alain \u5728\u6b64\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u5f88\u591a\u5f88\u9177\u7684\u9a9a\u64cd\u4f5c\u3002</p><h2 id="\u547d\u4ee4\u683c\u5f0f">\u547d\u4ee4\u683c\u5f0f<a onclick="window.location.hash = \'\u547d\u4ee4\u683c\u5f0f\'" class="anchor">#</a></h2><pre class="hljs language-bash"><code>ng g ng-alain:&lt;command name> <name> [options]</code></pre><p>ng-alain \u6709\u81ea\u5df1\u7684\u4e00\u5957\u6587\u4ef6\u7ec4\u7ec7\u7ed3\u6784\uff0c\u5f53\u4f60\u7834\u574f\u8fd9\u4e9b\u7ed3\u6784\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0b\u5217\u6307\u4ee4\u4ea7\u751f\u5f02\u5e38\u3002</p><h2 id="Module-\u6a21\u5757">Module \u6a21\u5757<a onclick="window.location.hash = \'Module-\u6a21\u5757\'" class="anchor">#</a></h2><p>\u751f\u6210\u4e00\u4e2a <code>trade</code> \u6a21\u5757\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:module trade</code></pre><p>\u4f1a\u5728 <code>routes/trade</code> \u751f\u6210\u4e24\u4e2a\u6587\u4ef6 <code>trade.module.ts</code>\u3001<code>trade-routing.module.ts</code>\uff0c\u4f60\u65e0\u6cd5\u6307\u5b9a\u4e0d\u751f\u6210 <code>*-routing.module.ts</code> \u56e0\u4e3a\u8fd9\u662f ng-alain \u7684\u4efb\u6027\u3002</p><p>\u6a21\u5757\u5185\u5bb9\u5305\u62ec\u4e86\u5bfc\u5165 <code>SharedModule</code> \u4ee5\u53ca\u4e00\u4e9b\u7edf\u4e00\u6027\u5bfc\u5165\u4e0e\u5bfc\u51fa\u7684\u65b9\u5f0f\uff0c\u5e76\u4e14\u4f60\u4e0d\u53ef\u80fd\u7834\u574f\u8fd9\u4e9b\u53d8\u91cf\u540d\uff08\u4f8b\u5982\uff1a<code>COMPONENTS</code>\u3001<code>COMPONENTS_NOROUNT</code>\u3001<code>routes</code>\uff09\u3002</p><h2 id="\u4e1a\u52a1\u9875">\u4e1a\u52a1\u9875<a onclick="window.location.hash = \'\u4e1a\u52a1\u9875\'" class="anchor">#</a></h2><p>\u76ee\u524d\u5305\u542b\u7684\u4e1a\u52a1\u7ec4\u4ef6\u9875\uff0c\u5305\u62ec\uff1a</p><ul><li><p><code>empty</code> \u7a7a\u767d\u9875\uff08\u5f85\u53d1\u5e03\uff09</p></li><li><p><code>list</code> \u5217\u8868\u9875</p></li><li><p><code>edit</code> \u7f16\u8f91\u9875</p></li><li><p><code>view</code> \u67e5\u770b\u9875</p></li><li><p><code>curd</code> \u5217\u8868\u3001\u7f16\u8f91\u3001\u67e5\u770b</p></li></ul><p>\u5728 <code>trade</code> \u4e0b\u751f\u6210 <code>list</code> \u5217\u8868\u9875\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:list list -m=trade</code></pre><p><strong>\u6ce8\u610f\uff1a</strong> <code>-m</code> \u662f\u5fc5\u987b\u6307\u5b9a\u7684\uff0c\u56e0\u4e3a ng-alain \u8ba4\u4e3a\u9875\u9762\u5e94\u8be5\u5728\u67d0\u4e2a\u5177\u4f53\u7684\u6a21\u5757\u91cc\uff0c\u800c\u4e0d\u662f\u5e7d\u7075\u3002</p><h3 id="\u9a9a\u64cd\u4f5c">\u9a9a\u64cd\u4f5c<a onclick="window.location.hash = \'\u9a9a\u64cd\u4f5c\'" class="anchor">#</a></h3><p>\u4e00\u822c\u800c\u8a00\uff0c\u4e00\u4e2a\u6a21\u5757\u53ef\u80fd\u4f1a\u5305\u542b\u76f8\u540c\u7c7b\u578b\u7684\u4e1a\u52a1\u9875\uff0c\u800c\u6211\u4eec\u4ea7\u751f\u7684\u6587\u4ef6\u7ed3\u6784\u53ef\u80fd\u5e0c\u671b\u662f\uff1a</p><pre class="hljs language-null"><code>sys\n  log\n    view\n      view.component.ts\n    log.component.ts\n  sys.module.ts</code></pre><p>\u56e0\u6b64\uff0c\u5f53\u4f60\u5e0c\u671b\u751f\u6210\u7684\u67e5\u770b\u5e94\u8be5\u662f\u5728 <code>log</code> \u7ec4\u4ef6\u4e0b\u9762\u65f6\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u5b50\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:view view -m=sys -t=log</code></pre><h3 id="edit-&-view-\u9875">edit & view \u9875<a onclick="window.location.hash = \'edit-&-view-\u9875\'" class="anchor">#</a></h3><p>\u5bf9\u4e8e <code>edit</code>\u3001<code>view</code> \u9ed8\u8ba4\u662f\u4ee5\u6a21\u6001\u6846\u5c55\u793a\u6765\u751f\u6210\uff0c\u4f60\u53ef\u4ee5\u6539\u7528\u9875\u9762\u5c55\u793a\u5219\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:edit &lt;page name> --modal=false</code></pre></article>',meta:{order:20,title:"\u4e1a\u52a1\u9875",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u547d\u4ee4\u683c\u5f0f",title:"\u547d\u4ee4\u683c\u5f0f",h:2},{href:"#Module-\u6a21\u5757",title:"Module \u6a21\u5757",h:2},{href:"#\u4e1a\u52a1\u9875",title:"\u4e1a\u52a1\u9875",h:2},{href:"#\u9a9a\u64cd\u4f5c",title:"\u9a9a\u64cd\u4f5c",h:3},{href:"#edit-&-view-\u9875",title:"edit & view \u9875",h:3}]}},demo:!1},this.codes=[]},s=function(){this.item={cols:1,urls:{"zh-CN":"packages/schematics/docs/getting-started.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p>\u4f7f\u7528 ng-alain \u811a\u624b\u67b6\u5e94\u5c3d\u53ef\u80fd\u7684\u4f7f\u7528 Angular CLI \u6240\u63d0\u4f9b\u7684 <code>ng</code> \u547d\u4ee4\u7ec4\uff0c\u6765\u6784\u5efa\u3001\u5347\u7ea7\u7b49\uff0cng-alain \u4e5f\u5b9e\u73b0\u4e86\u4e00\u4e9b\u6bd4\u8f83\u9177\u7684\u4e8b\uff1a</p><ul><li><p>\u4f7f\u7528 <a href="/cli/add" data-url="/cli/add">ng add</a> \u6784\u5efa\u7a7a\u811a\u624b\u67b6</p></li><li><p>\u4f7f\u7528 <a href="/cli/generate" data-url="/cli/generate">ng g</a> \u6765\u6784\u5efa\u6a21\u5757\u3001\u4e1a\u52a1\u9875</p></li><li><p>\u53ef\u63d2\u62d4 <a href="/cli/plugin" data-url="/cli/plugin">\u63d2\u4ef6</a> \u7b49</p></li></ul><h2 id="\u5982\u4f55\u4f7f\u7528">\u5982\u4f55\u4f7f\u7528<a onclick="window.location.hash = \'\u5982\u4f55\u4f7f\u7528\'" class="anchor">#</a></h2><p>\u6211\u4eec\u4e0d\u5efa\u8bae\u76f4\u63a5\u514b\u9686 Github \u6e90\u4ee3\u7801\uff0c\u800c\u5e94\u8be5\u4f7f\u7528 <code>ng add</code> \u6765\u6784\u5efa ng-alain \u9879\u76ee\uff0c\u800c\u6784\u5efa\u4e00\u4e2a\u7a7a ng-alain \u53ea\u9700\u8981\u7b80\u5355\u51e0\u4e2a\u52a8\u4f5c\uff1a</p><p>1\u3001\u521b\u5efa\u4e00\u4e2a\u7a7a angular \u9879\u76ee</p><pre class="hljs language-bash"><code>ng new demo --style less</code></pre><p>2\u3001\u6dfb\u52a0 ng-alain \u811a\u624b\u67b6</p><pre class="hljs language-bash"><code>ng add ng-alain</code></pre><blockquote><p>\u9047\u5230\u95ee\u9898\u8bf7\u9605\u8bfb <a href="/cli/faq" data-url="/cli/faq">\u5e38\u89c1\u95ee\u9898</a></p></blockquote><p>3\u3001\u8fd0\u884c\u9879\u76ee</p><pre class="hljs language-bash"><code>ng serve</code></pre><h2 id="\u5982\u4f55\u5347\u7ea7">\u5982\u4f55\u5347\u7ea7<a onclick="window.location.hash = \'\u5982\u4f55\u5347\u7ea7\'" class="anchor">#</a></h2><p>\u9664DEMO\u793a\u4f8b\u9875\u4ee5\u5916\uff0c\u4f1a\u6709\u4e00\u4e9b\u5f71\u54cd\u6bd4\u8f83\u4e25\u91cd\u7684\uff0c\u4f9d\u7136\u4f1a\u63d0\u4f9b <code>ng update</code> \u6765\u89e3\u51b3\u5347\u7ea7\u95ee\u9898\uff0c\u5bf9\u4e8e\u5176\u4ed6\u60c5\u51b5\u7684\u5347\u7ea7\u8bf7\u53c2\u8003 <a href="/docs/upgrade" data-url="/docs/upgrade">\u5347\u7ea7\u811a\u624b\u67b6</a>\u3002</p></article>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u5982\u4f55\u4f7f\u7528",title:"\u5982\u4f55\u4f7f\u7528",h:2},{href:"#\u5982\u4f55\u5347\u7ea7",title:"\u5982\u4f55\u5347\u7ea7",h:2}]}},demo:!1},this.codes=[]},r=function(){this.item={cols:1,urls:{"zh-CN":"packages/schematics/docs/plugin.md"},content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762">\u5199\u5728\u524d\u9762<a onclick="window.location.hash = \'\u5199\u5728\u524d\u9762\'" class="anchor">#</a></h2><p>\u63d2\u4ef6\u4e3b\u8981\u662f\u9488\u5bf9\u9879\u76ee\u4e00\u4e9b\u989d\u5916 <strong>\u53ef\u9009</strong> \u884c\u4e3a\u7684\u6dfb\u52a0\u6216\u79fb\u9664\uff0c\u4f8b\u5982\u5f53\u4f60\u89c9\u5f97\u4ee3\u7801\u98ce\u683c\u5bf9\u4f60\u6765\u8bf4\u610f\u4e49\u4e0d\u5927\uff08\u867d\u7136\u6211\u4e0d\u8fd9\u4e48\u770b\uff09\uff0c\u53ea\u9700\u8981\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:plugin codeStyle -t=remove</code></pre><p>\u53c8\u6216\u8005\u5e0c\u671b\u9879\u76ee\u5e94\u8be5\u6709\u4e00\u4e2a\u7edf\u4e00\u98ce\u683c\u65f6\uff1a</p><pre class="hljs language-bash"><code>ng g ng-alain:plugin codeStyle</code></pre><h2 id="\u547d\u4ee4\u683c\u5f0f">\u547d\u4ee4\u683c\u5f0f<a onclick="window.location.hash = \'\u547d\u4ee4\u683c\u5f0f\'" class="anchor">#</a></h2><pre class="hljs language-bash"><code>ng g ng-alain:plugin &lt;plugin name> -t=[add | remove]</code></pre><p>\u5176\u4e2d <code>&lt;plugin name></code> \u63d2\u4ef6\u540d\u79f0\uff0c\u4ece\u63d2\u4ef6\u5217\u8868\u4e2d\u83b7\u53d6\uff0c<code>-t</code> \u652f\u6301\u4e24\u79cd\u503c <code>add</code>\uff08\u9ed8\u8ba4\uff09 \u548c <code>remove</code>\u3002</p><h2 id="\u63d2\u4ef6\u5217\u8868">\u63d2\u4ef6\u5217\u8868<a onclick="window.location.hash = \'\u63d2\u4ef6\u5217\u8868\'" class="anchor">#</a></h2><h3 id="g2">g2<a onclick="window.location.hash = \'g2\'" class="anchor">#</a></h3><p>G2\u56fe\u8868\u3002</p><pre class="hljs language-bash"><code># add\nng g ng-alain:plugin g2\n# remove\nng g ng-alain:plugin g2 -t=remove</code></pre><h3 id="codeStyle">codeStyle<a onclick="window.location.hash = \'codeStyle\'" class="anchor">#</a></h3><p>\u4ee3\u7801\u98ce\u683c\uff0c\u6709\u51e0\u4e2a\u89c4\u5219\uff1a</p><ul><li><p>\u4f7f\u7528 <a target="_blank" href="https://github.com/palantir/tslint" data-url="https://github.com/palantir/tslint">tslint</a> \u6821\u9a8c typescript \u90e8\u5206</p></li><li><p>\u4f7f\u7528 <a target="_blank" href="https://github.com/stylelint/stylelint" data-url="https://github.com/stylelint/stylelint">stylelint</a> \u6821\u9a8c less \u90e8\u5206</p></li><li><p>\u4f7f\u7528 <a target="_blank" href="https://github.com/prettier/prettier" data-url="https://github.com/prettier/prettier">prettier</a> \u4ee3\u7801\u683c\u5f0f\u5316</p></li><li><p>\u4f7f\u7528 <a target="_blank" href="https://github.com/typicode/husky" data-url="https://github.com/typicode/husky">husky</a> \u548c <a target="_blank" href="https://github.com/okonet/lint-staged" data-url="https://github.com/okonet/lint-staged">lint-staged</a> \u5728\u4f60\u63d0\u4ea4\u4ee3\u7801\u65f6\u8fdb\u884c\u4ee3\u7801\u6821\u9a8c\u548c\u683c\u5f0f\u5316</p></li></ul><p>ng-alain \u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e00\u90e8\u5206\u7684\u4ee3\u7801\u98ce\u683c\u914d\u7f6e\u65b9\u6848\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u627e\u5230\u8fd9\u4e9b\u914d\u7f6e\u4fe1\u606f\uff0c\u4f9d\u7167\u4f60\u81ea\u5df1\u7684\u98ce\u683c\u8fdb\u884c\u4fee\u9970\u3002</p><pre class="hljs language-bash"><code># add\nng g ng-alain:plugin codeStyle\n# remove\nng g ng-alain:plugin codeStyle -t=remove</code></pre><h3 id="hmr">hmr<a onclick="window.location.hash = \'hmr\'" class="anchor">#</a></h3><p>\u652f\u6301HMR\u70ed\u66ff\u6362\u3002</p><pre class="hljs language-bash"><code># add\nng g ng-alain:plugin hmr\n# remove\nng g ng-alain:plugin hmr -t=remove</code></pre><p>\u5b89\u88c5\u540e\u53ef\u4f7f\u7528\u542f\u7528HMR\u6a21\u5f0f\u8fdb\u5165\u5f00\u53d1\u73af\u5883\uff1a</p><pre class="hljs language-bash"><code>npm run hmr</code></pre><h3 id="docker">docker<a onclick="window.location.hash = \'docker\'" class="anchor">#</a></h3><p>\u652f\u6301Docker\u90e8\u7f72\u3002</p><pre class="hljs language-bash"><code># add\nng g ng-alain:plugin docker\n# remove\nng g ng-alain:plugin docker -t=remove</code></pre><h3 id="npm">npm<a onclick="window.location.hash = \'npm\'" class="anchor">#</a></h3><p>\u5728\u56fd\u5185\u4f7f\u7528 npm \u59cb\u7ec8\u662f\u4e00\u4e2a\u201c\u75db\u201d\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u589e\u52a0\u4e00\u4e2a\u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf\u914d\u7f6e\u6587\u4ef6 <code>.npmrc</code>\uff0c\u6765\u89e3\u51b3\u7f51\u7edc\u95ee\u9898\u3002</p><pre class="hljs language-bash"><code># add\nng g ng-alain:plugin npm\n# remove\nng g ng-alain:plugin npm -t=remove</code></pre><h3 id="yarn">yarn<a onclick="window.location.hash = \'yarn\'" class="anchor">#</a></h3><blockquote><p>\u9650 <code>@angular-devkit/build-angular &lt; 0.7.5</code></p></blockquote><p>\u4fee\u590d\u7531\u4e8e\u964d\u7ea7 Less \u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528 <code>yarn</code> \u5b89\u88c5\u4f9d\u8d56\u5305\u95ee\u9898\u3002</p><pre class="hljs language-bash"><code># add\nng g ng-alain:plugin yarn\n# remove\nng g ng-alain:plugin yarn -t=remove</code></pre></article>',meta:{order:30,title:"\u63d2\u4ef6",type:"Documents"},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{href:"#\u547d\u4ee4\u683c\u5f0f",title:"\u547d\u4ee4\u683c\u5f0f",h:2},{href:"#\u63d2\u4ef6\u5217\u8868",title:"\u63d2\u4ef6\u5217\u8868",h:2},{href:"#g2",title:"g2",h:3},{href:"#codeStyle",title:"codeStyle",h:3},{href:"#hmr",title:"hmr",h:3},{href:"#docker",title:"docker",h:3},{href:"#npm",title:"npm",h:3},{href:"#yarn",title:"yarn",h:3}]}},demo:!1},this.codes=[]},p=function(){},u=n("pMnS"),h=n("82da"),b=n("GYi0"),g=n("R6D3"),m=n("WP5L"),A=n("71F0"),f=n("fE+l"),k=n("0RMT"),w=n("QcbP"),y=n("0D9X"),v=n("SpJI"),j=n("hBP+"),M=n("QPFe"),z=n("RdGh"),q=n("D9vs"),C=n("DyZ0"),S=n("TY3c"),O=n("u+Cy"),N=n("8+8K"),D=n("YVZs"),P=n("F/j7"),T=n("/EOF"),Z=n("ZKYL"),_=n("SZk1"),R=n("5eO6"),G=n("p+4O"),F=n("bLMo"),L=n("ieBQ"),Q=n("651C"),Y=n("AKjh"),x=n("Z4UC"),H=n("ZYCi"),K=n("ZYjt"),B=l.qb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function E(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),l.rb(1,245760,null,0,Q.a,[Y.a,x.a,H.o,K.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,e){var n=e.component;a(e,1,0,n.codes,n.item)},null)}var I=l.ob("app-cli-add",o,function(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-cli-add",[],null,null,null,E,B)),l.rb(1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),U=l.qb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function W(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),l.rb(1,245760,null,0,Q.a,[Y.a,x.a,H.o,K.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,e){var n=e.component;a(e,1,0,n.codes,n.item)},null)}var X=l.ob("app-cli-default",t,function(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-cli-default",[],null,null,null,W,U)),l.rb(1,49152,null,0,t,[],null,null)],null,null)},{},{},[]),J=l.qb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function V(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),l.rb(1,245760,null,0,Q.a,[Y.a,x.a,H.o,K.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,e){var n=e.component;a(e,1,0,n.codes,n.item)},null)}var $=l.ob("app-cli-faq",d,function(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-cli-faq",[],null,null,null,V,J)),l.rb(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),aa=l.qb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function ea(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),l.rb(1,245760,null,0,Q.a,[Y.a,x.a,H.o,K.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,e){var n=e.component;a(e,1,0,n.codes,n.item)},null)}var na=l.ob("app-cli-generate",i,function(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-cli-generate",[],null,null,null,ea,aa)),l.rb(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),la=l.qb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function ca(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),l.rb(1,245760,null,0,Q.a,[Y.a,x.a,H.o,K.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,e){var n=e.component;a(e,1,0,n.codes,n.item)},null)}var oa=l.ob("app-cli-getting-started",s,function(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-cli-getting-started",[],null,null,null,ca,la)),l.rb(1,49152,null,0,s,[],null,null)],null,null)},{},{},[]),ta=l.qb({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}});function da(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-docs",[],null,null,null,L.b,L.a)),l.rb(1,245760,null,0,Q.a,[Y.a,x.a,H.o,K.c],{codes:[0,"codes"],item:[1,"item"]},null)],function(a,e){var n=e.component;a(e,1,0,n.codes,n.item)},null)}var ia=l.ob("app-cli-plugin",r,function(a){return l.Mb(0,[(a()(),l.sb(0,0,null,null,1,"app-cli-plugin",[],null,null,null,da,ta)),l.rb(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),sa=n("Ip0R"),ra=n("gIcY"),pa=n("t/Na"),ua=n("M2Lx"),ha=n("tn8F"),ba=n("eDkP"),ga=n("Fzqc"),ma=n("EAhq"),Aa=n("MmOl"),fa=n("Ybye"),ka=n("dWZg"),wa=n("4c35"),ya=n("qAlS"),va=n("9J0+"),ja=n("CGSU"),Ma=n("5CFV"),za=n("GTZx"),qa=n("hS58"),Ca=n("XZsx"),Sa=n("+ndR"),Oa=n("EWQH"),Na=n("HjCm"),Da=n("aq9g"),Pa=n("7Dpl"),Ta=n("ekmu"),Za=n("vjj7"),_a=n("qdwt"),Ra=n("l/Xz"),Ga=n("sRo1"),Fa=n("mX2v"),La=n("BQzg"),Qa=n("hDaA"),Ya=n("YQXl"),xa=n("M3JP"),Ha=n("WNQ9"),Ka=n("5Oon"),Ba=n("lM9c"),Ea=n("OSVY"),Ia=n("MNSj"),Ua=n("MZBU"),Wa=n("ev4S"),Xa=n("G1y0"),Ja=n("KmAc"),Va=n("zGKZ"),$a=n("xly9"),ae=n("u7PB"),ee=n("1Ry3"),ne=n("4+vV"),le=n("ZgPA"),ce=n("37MH"),oe=n("fZ1T"),te=n("iwTp"),de=n("mSU2"),ie=n("4vQL"),se=n("iTTW"),re=n("gQlp"),pe=n("oCVe"),ue=n("XYAa"),he=n("ynfG"),be=n("A7o+"),ge=n("gMdr"),me=n("6DZm"),Ae=n("ADoS"),fe=n("slxf");n.d(e,"CliModuleNgFactory",function(){return ke});var ke=l.pb(p,[],function(a){return l.zb([l.Ab(512,l.j,l.db,[[8,[u.a,h.uc,h.vc,h.wc,h.xc,h.yc,h.zc,h.Ac,b.a,g.a,m.a,A.a,f.a,k.a,w.a,y.a,v.a,j.a,M.a,z.a,q.a,C.a,S.a,O.a,N.a,D.a,P.a,T.a,Z.a,_.a,R.a,G.a,F.a,I,X,$,na,oa,ia]],[3,l.j],l.w]),l.Ab(4608,sa.q,sa.p,[l.t,[2,sa.D]]),l.Ab(4608,ra.w,ra.w,[]),l.Ab(4608,ra.d,ra.d,[]),l.Ab(4608,pa.m,pa.s,[sa.e,l.A,pa.q]),l.Ab(4608,pa.t,pa.t,[pa.m,pa.r]),l.Ab(5120,pa.a,function(a){return[a]},[pa.t]),l.Ab(4608,pa.p,pa.p,[]),l.Ab(6144,pa.n,null,[pa.p]),l.Ab(4608,pa.l,pa.l,[pa.n]),l.Ab(6144,pa.b,null,[pa.l]),l.Ab(4608,pa.g,pa.o,[pa.b,l.q]),l.Ab(4608,pa.c,pa.c,[pa.g]),l.Ab(4608,ua.c,ua.c,[]),l.Ab(5120,ha.ue,ha.we,[[3,ha.ue],ha.ve]),l.Ab(4608,sa.f,sa.f,[l.t]),l.Ab(5120,ha.Fd,ha.be,[[3,ha.Fd],ha.te,ha.ue,sa.f]),l.Ab(4608,ba.d,ba.d,[ba.k,ba.f,l.j,ba.i,ba.g,l.q,l.y,sa.e,ga.b]),l.Ab(5120,ba.l,ba.m,[ba.d]),l.Ab(5120,ha.T,ha.U,[sa.e,[3,ha.T]]),l.Ab(4608,ha.hb,ha.hb,[]),l.Ab(4608,ha.Bb,ha.Bb,[]),l.Ab(4608,ha.Pd,ha.Pd,[ba.d,l.q,l.j,l.g]),l.Ab(4608,ha.Vd,ha.Vd,[ba.d,l.q,l.j,l.g]),l.Ab(4608,ha.ge,ha.ge,[[3,ha.ge]]),l.Ab(4608,ha.ie,ha.ie,[ba.d,ha.ue,ha.ge]),l.Ab(4608,ma.c,ma.c,[]),l.Ab(4608,Aa.d,Aa.d,[]),l.Ab(4608,fa.a,fa.a,[ha.e]),l.Ab(1073742336,sa.c,sa.c,[]),l.Ab(1073742336,ra.u,ra.u,[]),l.Ab(1073742336,ra.h,ra.h,[]),l.Ab(1073742336,H.s,H.s,[[2,H.y],[2,H.o]]),l.Ab(1073742336,ra.r,ra.r,[]),l.Ab(1073742336,pa.e,pa.e,[]),l.Ab(1073742336,pa.d,pa.d,[]),l.Ab(1073742336,ua.d,ua.d,[]),l.Ab(1073742336,ka.b,ka.b,[]),l.Ab(1073742336,ha.Hb,ha.Hb,[]),l.Ab(1073742336,ha.j,ha.j,[]),l.Ab(1073742336,ha.ze,ha.ze,[]),l.Ab(1073742336,ha.ye,ha.ye,[]),l.Ab(1073742336,ha.Be,ha.Be,[]),l.Ab(1073742336,ga.a,ga.a,[]),l.Ab(1073742336,wa.c,wa.c,[]),l.Ab(1073742336,ya.a,ya.a,[]),l.Ab(1073742336,ba.h,ba.h,[]),l.Ab(1073742336,ha.o,ha.o,[]),l.Ab(1073742336,ha.Gc,ha.Gc,[]),l.Ab(1073742336,ha.y,ha.y,[]),l.Ab(1073742336,ha.D,ha.D,[]),l.Ab(1073742336,ha.F,ha.F,[]),l.Ab(1073742336,ha.O,ha.O,[]),l.Ab(1073742336,ha.W,ha.W,[]),l.Ab(1073742336,ha.R,ha.R,[]),l.Ab(1073742336,ha.Y,ha.Y,[]),l.Ab(1073742336,ha.ab,ha.ab,[]),l.Ab(1073742336,ha.ib,ha.ib,[]),l.Ab(1073742336,ha.lb,ha.lb,[]),l.Ab(1073742336,ha.nb,ha.nb,[]),l.Ab(1073742336,ha.qb,ha.qb,[]),l.Ab(1073742336,ha.tb,ha.tb,[]),l.Ab(1073742336,ha.xb,ha.xb,[]),l.Ab(1073742336,ha.Gb,ha.Gb,[]),l.Ab(1073742336,ha.zb,ha.zb,[]),l.Ab(1073742336,ha.Kb,ha.Kb,[]),l.Ab(1073742336,ha.Mb,ha.Mb,[]),l.Ab(1073742336,ha.Ob,ha.Ob,[]),l.Ab(1073742336,ha.Qb,ha.Qb,[]),l.Ab(1073742336,ha.Sb,ha.Sb,[]),l.Ab(1073742336,ha.Ub,ha.Ub,[]),l.Ab(1073742336,ha.bc,ha.bc,[]),l.Ab(1073742336,ha.hc,ha.hc,[]),l.Ab(1073742336,ha.jc,ha.jc,[]),l.Ab(1073742336,ha.mc,ha.mc,[]),l.Ab(1073742336,ha.qc,ha.qc,[]),l.Ab(1073742336,ha.uc,ha.uc,[]),l.Ab(1073742336,ha.wc,ha.wc,[]),l.Ab(1073742336,ha.zc,ha.zc,[]),l.Ab(1073742336,ha.Jc,ha.Jc,[]),l.Ab(1073742336,ha.Ic,ha.Ic,[]),l.Ab(1073742336,ha.gd,ha.gd,[]),l.Ab(1073742336,ha.id,ha.id,[]),l.Ab(1073742336,ha.ld,ha.ld,[]),l.Ab(1073742336,ha.ud,ha.ud,[]),l.Ab(1073742336,ha.yd,ha.yd,[]),l.Ab(1073742336,ha.Cd,ha.Cd,[]),l.Ab(1073742336,ha.Id,ha.Id,[]),l.Ab(1073742336,ha.Kd,ha.Kd,[]),l.Ab(1073742336,ha.Qd,ha.Qd,[]),l.Ab(1073742336,ha.Wd,ha.Wd,[]),l.Ab(1073742336,ha.Zd,ha.Zd,[]),l.Ab(1073742336,ha.de,ha.de,[]),l.Ab(1073742336,ha.je,ha.je,[]),l.Ab(1073742336,ha.le,ha.le,[]),l.Ab(1073742336,ha.ne,ha.ne,[]),l.Ab(1073742336,ha.re,ha.re,[]),l.Ab(1073742336,ha.a,ha.a,[]),l.Ab(1073742336,va.a,va.a,[]),l.Ab(1073742336,ja.a,ja.a,[]),l.Ab(1073742336,Ma.a,Ma.a,[]),l.Ab(1073742336,za.a,za.a,[]),l.Ab(1073742336,qa.a,qa.a,[]),l.Ab(1073742336,Ca.a,Ca.a,[]),l.Ab(1073742336,Sa.a,Sa.a,[]),l.Ab(1073742336,Oa.a,Oa.a,[]),l.Ab(1073742336,Na.a,Na.a,[]),l.Ab(1073742336,Da.a,Da.a,[]),l.Ab(1073742336,Pa.a,Pa.a,[]),l.Ab(1073742336,Ta.a,Ta.a,[]),l.Ab(1073742336,Za.a,Za.a,[]),l.Ab(1073742336,_a.a,_a.a,[]),l.Ab(1073742336,Ra.a,Ra.a,[]),l.Ab(1073742336,Ga.a,Ga.a,[]),l.Ab(1073742336,Fa.a,Fa.a,[]),l.Ab(1073742336,La.a,La.a,[]),l.Ab(1073742336,Qa.a,Qa.a,[]),l.Ab(1073742336,ma.b,ma.b,[]),l.Ab(1073742336,Ya.a,Ya.a,[]),l.Ab(1073742336,xa.a,xa.a,[]),l.Ab(1073742336,Ha.a,Ha.a,[]),l.Ab(1073742336,Ka.a,Ka.a,[]),l.Ab(1073742336,Ba.a,Ba.a,[]),l.Ab(1073742336,Ea.a,Ea.a,[]),l.Ab(1073742336,Ia.a,Ia.a,[]),l.Ab(1073742336,Ua.a,Ua.a,[]),l.Ab(1073742336,Wa.a,Wa.a,[]),l.Ab(1073742336,Xa.a,Xa.a,[]),l.Ab(1073742336,Ja.a,Ja.a,[]),l.Ab(1073742336,Va.a,Va.a,[]),l.Ab(1073742336,$a.a,$a.a,[]),l.Ab(1073742336,ae.a,ae.a,[]),l.Ab(1073742336,ee.a,ee.a,[]),l.Ab(1073742336,ne.a,ne.a,[]),l.Ab(1073742336,le.a,le.a,[]),l.Ab(1073742336,ce.a,ce.a,[]),l.Ab(1073742336,oe.a,oe.a,[]),l.Ab(1073742336,te.a,te.a,[]),l.Ab(1073742336,de.a,de.a,[]),l.Ab(1073742336,ie.a,ie.a,[]),l.Ab(1073742336,se.a,se.a,[]),l.Ab(1073742336,re.a,re.a,[]),l.Ab(1073742336,pe.a,pe.a,[]),l.Ab(1073742336,ue.a,ue.a,[]),l.Ab(1073742336,he.a,he.a,[]),l.Ab(1073742336,be.h,be.h,[]),l.Ab(1073742336,ge.b,ge.b,[]),l.Ab(1073742336,me.a,me.a,[]),l.Ab(1073742336,Aa.c,Aa.c,[]),l.Ab(1073742336,Ae.c,Ae.c,[]),l.Ab(1073742336,fe.a,fe.a,[]),l.Ab(1073742336,p,p,[]),l.Ab(256,pa.q,"XSRF-TOKEN",[]),l.Ab(256,pa.r,"X-XSRF-TOKEN",[]),l.Ab(256,ha.ve,!1,[]),l.Ab(256,ha.te,void 0,[]),l.Ab(256,ha.Md,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),l.Ab(256,ha.Td,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),l.Ab(1024,H.m,function(){return[[{path:"",component:c.a,children:[{path:"",redirectTo:"getting-started",pathMatch:"full"},{path:"add",component:o},{path:"default",component:t},{path:"faq",component:d},{path:"generate",component:i},{path:"getting-started",component:s},{path:"plugin",component:r}]}]]},[])])})}}]);