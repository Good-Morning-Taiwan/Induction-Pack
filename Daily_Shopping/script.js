const items=document.querySelectorAll('.phrases details');
items.forEach((item)=>item.addEventListener('toggle',()=>{if(item.open&&innerWidth<=760){items.forEach((other)=>{if(other!==item)other.open=false;});}}));
