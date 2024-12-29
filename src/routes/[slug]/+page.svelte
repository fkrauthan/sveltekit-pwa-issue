<script lang="ts">

import {page} from "$app/state";
</script>

<h2>Dynamic section {page.params.slug}</h2>

<p>This is the dynamic page that you are accessing with slug "{page.params.slug}"</p>

<a href="/test">Go Back</a>
