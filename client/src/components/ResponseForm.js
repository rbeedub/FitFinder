import React from "react";

function ResponseForm() {
return (
<>
<div class="ui form">
<div class="inline fields">
<label for="fruit">Are you going?</label>
<div class="field">
    <div class="ui radio checkbox">
    <input type="radio" name="yes" checked="" tabindex="0" class="hidden"/>
    <label>Yes</label>
    </div>
</div>
<div class="field">
    <div class="ui radio checkbox">
    <input type="radio" name="no" tabindex="0" class="hidden"/>
    <label>No</label>
    </div>
</div>
<div class="field">
    <div class="ui radio checkbox">
    <input type="radio" name="maybe" tabindex="0" class="hidden"/>
    <label>Maybe</label>
    </div>
</div>
</div>
</div>
</>
)
}

export default ResponseForm;