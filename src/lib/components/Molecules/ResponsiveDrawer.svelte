<div class="drawer drawer-mobile h-full">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
        <slot name="content"></slot>
    </div> 
    <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label> 
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <slot name="menu"></slot>
        </ul>
    </div>
</div>

