YUI.add("gallery-event-nav-keys",function(e){var t={enter:13,esc:27,backspace:8,tab:9,pageUp:33,pageDown:34,left:37,up:38,right:39,down:40};e.Object.each(t,function(t,n){e.Event.define({type:n,on:function(e,n,r,i){var s=i?"delegate":"on";n._handle=e[s]("keydown",function(e){e.keyCode===t&&r.fire(e)},i)},delegate:function(){this.on.apply(this,arguments)},detach:function(e,t){t._handle.detach()},detachDelegate:function(){this.detach.apply(this,arguments)}})})},"gallery-2011.02.02-21-07",{requires:["event-synthetic"]}),YUI.add("moodle-format_grid-gridkeys",function(e,t){M.format_grid=M.format_grid||{},M.format_grid.gridkeys=M.format_grid.gridkeys||{},M.format_grid.gridkeys={init:function(){e.on("esc",function(e){e.preventDefault(),M.format_grid.icon_toggle(e)}),e.on("left",function(e){e.preventDefault(),M.format_grid.arrow_left(e)}),e.on("right",function(e){e.preventDefault(),M.format_grid.arrow_right(e)}),e.on("enter",function(e){M.format_grid.shadebox.shadebox_open==0?(e.preventDefault(),M.format_grid.icon_toggle(e)):e.shiftKey&&(e.preventDefault(),M.format_grid.icon_toggle(e))}),e.on("tab",function(e){M.format_grid.shadebox.shadebox_open==0&&(e.preventDefault(),e.shiftKey?M.format_grid.arrow_left(e):M.format_grid.arrow_right(e))})}}},"@VERSION@",{requires:["gallery-event-nav-keys"]});
