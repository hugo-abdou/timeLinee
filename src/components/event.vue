<template>
	<div
		:class="[
			'flex items-center',
			layout == 'horizontal' ? 'flex-row' : 'flex-col',
		]"
	>
		<div class="bg-white w-16 shadow rounded m-2 flex justify-around p-1">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				class="w-5 font-black"
			>
				<path
					d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				class="w-5 font-black"
			>
				<polyline points="3 6 5 6 21 6"></polyline>
				<path
					d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
				></path>
				<line x1="10" y1="11" x2="10" y2="17"></line>
				<line x1="14" y1="11" x2="14" y2="17"></line>
			</svg>
		</div>
		<div
			:class="[
				'flex items-center',
				layout == 'horizontal' ? 'flex-col' : 'flex-row',
			]"
		>
			<span
				:class="[
					'block',
					index > 0 ? 'bg-gray-900 ' : '',
					layout == 'horizontal' ? 'h-10 w-1' : 'h-1 w-16',
				]"
			></span>
			<span
				:class="[
					'w-4 h-4 bg-gray-900 block rounded-full z-10',
					event.active ? 'ring-4' : '',
				]"
			></span>
			<span
				:class="[
					'block',
					index < events.length - 1 ? 'bg-gray-900 ' : '',
					layout == 'horizontal' ? 'h-10 w-1' : 'h-1 w-16',
				]"
			></span>
		</div>
		<div class="flex flex-col">
			<input
				@focus="activate(index)"
				@change="changeEvent(event, index)"
				@keyup.enter="changeEvent(event, index)"
				v-model="events[index].name"
				maxlength="12"
				class="resize-none m-1 h-7 max-w-28 font-bold uppercase text-center text-gray-900 bg-transparent focus:outline-none"
			/>
			<input
				@focus="activate"
				@change="changeEvent(event, index)"
				maxlength="12"
				type="text"
				v-model="events[index].date"
				class="m-0.1 max-w-28 text-center text-gray-900 text-xs bg-transparent focus:outline-none"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			event: Object,
			events: Array,
			index: Number,
			theme: String,
		},
		computed: {
			layout() {
				return this.theme;
			},
			data() {
				return {
					eventData: this.event,
				};
			},
		},
		methods: {
			activate() {
				this.$emit("deactivateAll");
				this.eventData.active = true;
			},
		},
	};
</script>