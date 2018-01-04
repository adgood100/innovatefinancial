import React from "react";

const Scribblelive = () =>


<div>
    <div class="scrbbl-embed" data-src="/event/2561063/35989"></div>
    <script type="text/javascript">
             (function(d, s, id) {
                 var js,ijs=d.getElementsByTagName(s)[0];
                 if(d.getElementById(id)){
                       return;
                 }
                 js=d.createElement(s);
                 js.id=id;
                 js.src="//embed.scribblelive.com/widgets/embed.js";
                 ijs.parentNode.insertBefore(js, ijs);
             }(document, 'script', 'scrbbl-js'));
    </script>
</div>

export default Scribblelive;