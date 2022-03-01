"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[569],{6475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return y}});var o=n(7462),a=n(3366),i=n(7294),r=n(3905),s=function(e){var t={fontSize:"1.7rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return i.createElement("div",{style:Object.assign({width:"fit-content",height:"3rem",padding:"0.8rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},e.style),className:"icon-button"},"left"===e.side&&i.createElement("div",{style:t},e.icon),i.createElement("div",null,e.children),"right"===e.side&&i.createElement("div",{style:t},e.icon))},l=n(7882),d=n(9877),c=n(8215),u=["components"],m={title:"Getting Started"},p=void 0,h={unversionedId:"ox_inventory/installation",id:"ox_inventory/installation",title:"Getting Started",description:"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,",source:"@site/docs/ox_inventory/installation.mdx",sourceDirName:"ox_inventory",slug:"/ox_inventory/installation",permalink:"/docs/ox_inventory/installation",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/installation.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Dependency version",permalink:"/docs/ox_lib/Shared/version"},next:{title:"Placeholder",permalink:"/docs/ox_inventory/Guides/placeholder"}},v={},y=[{value:"Dependecies",id:"dependecies",level:2},{value:"OxMySQL",id:"oxmysql",level:3},{value:"Lua Library",id:"lua-library",level:3},{value:"Production Build",id:"production-build",level:3},{value:"Optional resources",id:"optional-resources",level:2},{value:"qtarget",id:"qtarget",level:3},{value:"NPWD",id:"npwd",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Installation",id:"installation",level:3},{value:"Upgrading ESX",id:"upgrading-esx",level:2},{value:"Optional optimisation",id:"optional-optimisation",level:3}],g={toc:y};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,\nhowever it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;\notherwise you ",(0,r.kt)("strong",{parentName:"p"},"should not")," install this resource."))),(0,r.kt)("h2",{id:"dependecies"},"Dependecies"),(0,r.kt)("h3",{id:"oxmysql"},"OxMySQL"),(0,r.kt)("p",null,"We utilise our own resource to communicate with MySQL databases via the node-mysql2 package.\nThe backend is actively maintained and updated unlike the package used by mysql-async, providing improved performance, security, and features.\nWe provide full backwards compatibility with mysql-async and build for the current Cfx architecture."),(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("a",{href:"https://www.github.com/overextended/oxmysql",style:{marginRight:"0.6rem"}},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("a",{href:"https://overextended.github.io/docs/oxmysql/Installation/"},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,r.kt)("h3",{id:"lua-library"},"Lua Library"),(0,r.kt)("p",null,"A resource designed to provide reusable functions that can be loaded into any resource with simple variable declarations rather than through fxmanifest."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Currently used for:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SetInterval"),(0,r.kt)("li",{parentName:"ul"},"Server Callbacks"),(0,r.kt)("li",{parentName:"ul"},"Table utilities (contains, matches)"),(0,r.kt)("li",{parentName:"ul"},"Requesting models, animations, etc."),(0,r.kt)("li",{parentName:"ul"},"Disabling control actions")),(0,r.kt)("a",{href:"https://www.github.com/overextended/ox_lib"},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("h3",{id:"production-build"},"Production Build"),(0,r.kt)("p",null,"The interface is written in TypeScript using the React library, so the code included in the repository will not work.\nYou either need to build the package yourself (more information in ",(0,r.kt)("a",{parentName:"p",href:"/docs/ox_inventory/Guides/placeholder"},"guides")," section), or download a release (ox_inventory.zip)."),(0,r.kt)("a",{href:"https://www.github.com/overextended/ox_inventory/releases/latest",style:{marginRight:"0.6rem"}},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("h2",{id:"optional-resources"},"Optional resources"),(0,r.kt)("p",null,"The resources listed under here ",(0,r.kt)("strong",{parentName:"p"},"aren't")," necessary for the inventory to work but still have full support."),(0,r.kt)("h3",{id:"qtarget"},"qtarget"),(0,r.kt)("p",null,"A high performance targeting solution based on bt-target, and the basis for qb-target.\nIt is being updated alongside Ox Inventory to improve support as well as add compatibility when using QBCore or migrating from bt-target.\nAll stashes and shops will utilise PolyZone's instead of markers to interact with them."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you wish to use it first you must ensure that qtarget is enabled in the resource convars.\nYou will need to enable compatibility manually by adjusting your config - more information provided below."),(0,r.kt)("p",{parentName:"div"},"You must start qtarget before the inventory and after your framework."))),(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("a",{href:"https://www.github.com/overextended/qtarget",style:{marginRight:"0.6rem"}},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("a",{href:"https://overextended.github.io/qtarget/"},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,r.kt)("h3",{id:"npwd"},"NPWD"),(0,r.kt)("p",null,"A standalone and feature-rich phone created by Project Error."),(0,r.kt)("p",null,"The inventory will handle disabling the phone when the player has no item, and supports toggling the phone through item use."),(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("a",{href:"https://www.github.com/project-error/npwd",style:{marginRight:"0.6rem"}},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,r.kt)("a",{href:"https://projecterror.dev/docs"},(0,r.kt)(s,{side:"left",icon:(0,r.kt)(l.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can add these settings directly to your 'server.cfg', create a new (or multiple) file to load with 'exec'\nor add them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.cfg")," file in the inventory root and execute that."),(0,r.kt)("p",null,"You do not need to specify convars when you are not changing the values, as they will default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Activate specific event handlers and functions (supported: ox, esx)\nsetr inventory:framework "esx"\n\n# Load specific language file from data/locales\nsetr inventory:locale "en"\n\n# Number of slots for player inventories\nsetr inventory:slots 50\n\n# Maximum carry capacity for players, in kilograms\nsetr inventory:weight 30000\n\n# Weapons will reload after reaching 0 ammo\nsetr inventory:autoreload false\n\n# Blur the screen while accessing the inventory\nsetr inventory:screenblur true\n\n# Trim whitespace from vehicle plates when checking owned vehicles\nsetr inventory:trimplate true\n\n# Integrated support for qtarget stashes, shops, etc\nsetr inventory:qtarget false\n\n# Default hotkeys to access primary and secondary inventories, and hotbar\nsetr inventory:keys ["F2", "K", "TAB"]\n\n# Enable control action when inventory is open\nsetr inventory:enablekeys [249]\n\n# Jobs with access to police armoury, evidence lockers, etc\nsetr inventory:police ["police", "sheriff"]\n\n# Item prices fluctuate in shops\nset inventory:randomprices true\n\n# Compare current version to latest release on GitHub\nset inventory:versioncheck true\n\n# Loot will randomly generate inside unowned vehicles and dumpsters\nset inventory:randomloot true\n\n# Minimum job grade to remove items from evidence lockers\nset inventory:evidencegrade 2\n\n# Stashes will be wiped after remaining unchanged for the given time\nset inventory:clearstashes "6 MONTH"\n\n# Set the contents of randomly generated inventories\n# [item name, minimum, maxiumum, loot chance]\nset inventory:vehicleloot [\n    ["cola", 1, 1],\n    ["water", 1, 1],\n    ["garbage", 1, 2, 50],\n    ["panties", 1, 1, 5],\n    ["money", 1, 50],\n    ["money", 200, 400, 5],\n    ["bandage", 1, 1]\n]\n\nset inventory:dumpsterloot [\n    ["mustard", 1, 1],\n    ["garbage", 1, 3],\n    ["money", 1, 10],\n    ["burger", 1, 1]\n]\n\n# Set datadog API key for inventory logging (https://app.datadoghq.com/organization-settings/api-keys)\nset datadog:key ""\n\n# Set server intake (https://docs.datadoghq.com/api/latest/logs/#send-logs)\nset datadog:site "datadoghq.com"\n\n# Set server hostname\nset datadog:hostname "FXServer"\n\nadd_principal group.admin ox_inventory\nadd_ace resource.ox_inventory command.add_principal allow\nadd_ace resource.ox_inventory command.remove_principal allow\n')),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"fresh_esx",label:"Fresh ESX",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Use a compatible version of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+)",(0,r.kt)("br",{parentName:"p"}),"\n","Execute the query inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/install.sql"},"install.sql")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql"},"vehicle.sql"))),(0,r.kt)(c.Z,{value:"convert_esx",label:"Convert ESX",mdxType:"TabItem"},(0,r.kt)("p",null,"Use a compatible version of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+)",(0,r.kt)("br",{parentName:"p"}),"\n","Execute the query inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/install.sql"},"install.sql"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql"},"vehicle.sql"),(0,r.kt)("br",{parentName:"p"}),"\n","Open ",(0,r.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," and uncomment ",(0,r.kt)("inlineCode",{parentName:"p"},"server_script 'setup/convert.lua'"),(0,r.kt)("br",{parentName:"p"}),"\n","Start the server and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"convertinventory")," command from the console",(0,r.kt)("br",{parentName:"p"}),"\n","Remove the conversion file")),(0,r.kt)(c.Z,{value:"convert_linden",label:"Upgrade from Linden Inventory",mdxType:"TabItem"},(0,r.kt)("p",null,"Execute the query inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/upgrade.sql"},"upgrade.sql"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/setup/vehicle.sql"},"vehicle.sql"),(0,r.kt)("br",{parentName:"p"}),"\n","Open ",(0,r.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," and uncomment ",(0,r.kt)("inlineCode",{parentName:"p"},"server_script 'setup/convert.lua'"),(0,r.kt)("br",{parentName:"p"}),"\n","Start the server and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"convertinventory")," linden command from the console",(0,r.kt)("br",{parentName:"p"}),"\n","Remove the conversion file")),(0,r.kt)(c.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,r.kt)("p",null,"Work in progress."),(0,r.kt)("p",null,'Refer to the "bridge" module to get an idea of how you setup support for any framework.',(0,r.kt)("br",{parentName:"p"}),"\n","Modifications will need to be made for licenses, owned vehicles, and jobs."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should restart your server after the first startup to ensure everything has been correctly setup"))),(0,r.kt)("h2",{id:"upgrading-esx"},"Upgrading ESX"),(0,r.kt)("p",null,"Ox Inventory provides a complete suite of tools to replace the built-in items and inventory system from ESX, and is not intended to be used with resources designed around it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESX loadouts do not exist - resources that use them need to remove references or be modified to look for the weapon as an item"),(0,r.kt)("li",{parentName:"ul"},"Stashes from resources such as esx_policejob, esx_ambulancejob, etc. should be removed"),(0,r.kt)("li",{parentName:"ul"},"Shops from esx_shops or the armoury from esx_policejob should be removed"),(0,r.kt)("li",{parentName:"ul"},"Resources like esx_inventoryhud, esx_trunkinventory, esx_addoninventory, etc. should be removed")),(0,r.kt)("h3",{id:"optional-optimisation"},"Optional optimisation"),(0,r.kt)("p",null,"All item related functions from xPlayer, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"xPlayer.getInventoryItem"),", have been modified for compatibility purposes; however they are considered deprecated."),(0,r.kt)("p",null,"The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones."),(0,r.kt)("p",null,"You should read through the functions section for further information, but the following should give you a decent idea."),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"if xPlayer.getInventoryItem('acetone').count > 2 and xPlayer.getInventoryItem('antifreeze').count > 4 and xPlayer.getInventoryItem('sudo').count > 9 then \n    xPlayer.removeInventoryItem(\"acetone\", 3)\n    xPlayer.removeInventoryItem(\"antifreeze\", 5)\n    xPlayer.removeInventoryItem(\"sudo\", 10)\nend\n"))),(0,r.kt)(c.Z,{value:"inventory",label:"Inventory",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following code somewhere in your resource to cache the exports metatable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n")),(0,r.kt)("p",null,"You will be able to reference any functions exposed through the export."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local items = ox_inventory:Search(source, 'count', {'acetone', 'antifreeze', 'sudo'})\nif items and items.acetone > 2 and items.antifreeze > 4 and items.sudo > 9 then\n    ox_inventory:RemoveItem(source, 'acetone', 3)\n    ox_inventory:RemoveItem(source, 'antifreeze', 5)\n    ox_inventory:RemoveItem(source, 'sudo', 10)\nend\n")))))}k.isMDXComponent=!0}}]);