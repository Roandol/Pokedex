<script lang="ts">
	import { CardPokemon } from '../card';

	export let list: any[];
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 m-2 gap-2">
	{#each list as pokemon}
		{#if pokemon}
			<li class="flex items-center rounded-xl border border-gray-400 p-12 text-center">
				<CardPokemon {pokemon} />
			</li>
		{/if}
	{/each}
</ul>
