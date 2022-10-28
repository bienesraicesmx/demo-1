<div class="form-control w-full">
    <label for="" class="label">
        <span class="label-text">
            <slot name="label"></slot>
        </span>
        <span class="label-text-alt">
            <slot name="label-right"></slot>
        </span>
    </label>
    <slot name="field"></slot>
    <label for="" class="label">
        <span class="label-text-alt">
            <slot name="feedback"></slot>
        </span>
        <span class="label-text-alt">
            <slot name="feedback-right"></slot>
        </span>
    </label>
</div>