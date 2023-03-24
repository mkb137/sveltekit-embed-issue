<script>
	const handleClick = () => {
		console.log('handleClick')
		alert('Hello')
	}
</script>
<div id="embedded-content">
	<div>
		Embedded Page
	</div>
	<button on:click|preventDefault={handleClick}>Click Me</button>
</div>
<style>
	div#embedded-content {
		background-color: red;
	}
</style>