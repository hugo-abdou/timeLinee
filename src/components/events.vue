<template>
	<div class="bg-gray-50 min-h-screen py-10">
		<button
			@click="toggleDirection"
			class="bg-gray-700 px-3 capitalize py-1 mx-auto block text-white font-semibold hover:bg-gray-600 rounded-full shadow-md focus:outline-none"
		>
			{{ "Switch to " + layout }}
		</button>
		<div class="flex justify-center items-center mt-10">
			<div
				class="relative overflow-x-auto max-w-sm md:max-w-2xl xl:max-w-7xl p-2 pb-10"
			>
				<div
					:class="[
						'flex items-center',
						layout == 'horizontal' ? 'flex-col' : 'flex-row',
					]"
				>
					<div
						:class="[
							'flex items-center',
							layout == 'horizontal' ? 'flex-row' : 'flex-col',
						]"
						v-for="(event, index) in timeLineEvents"
						:key="event.id"
					>
						<div
							:class="[
								'flex items-center',
								layout == 'horizontal' ? 'flex-col' : 'flex-row',
							]"
						>
							<span
								v-if="index > 0"
								:class="[
									'bg-gray-900 block',
									layout == 'horizontal' ? 'h-10 w-1' : 'h-1 w-10',
								]"
							></span>
							<span
								:class="[
									'w-4 h-4 bg-gray-900 block rounded-full z-10',
									event.active ? 'ring-4' : '',
								]"
							></span>
							<span
								v-if="index < timeLineEvents.length - 1"
								:class="[
									'bg-gray-900 block',
									layout == 'horizontal' ? 'h-10 w-1' : 'h-1 w-10',
								]"
							></span>
						</div>
						<span class="m-1 text-gray-900 font-bold uppercase">{{
							event.name
						}}</span>
						<input
							@focus="activate(index)"
							@change="changeEvent(event, index)"
							type="text"
							v-model="timeLineEvents[index].date"
							class="m-0.1 w-10 text-center text-gray-900 text-xs bg-transparent focus:outline-none"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			events: Array,
		},
		data() {
			return { layout: "vertical", timeLineEvents: this.events };
		},
		methods: {
			changeEvent(e, index) {
				this.$emit("changeEvent", e);
				this.timeLineEvents[index].active = false;
			},
			activate(index = null) {
				this.events.map((e) => {
					e.active = false;
				});
				if (index >= 0) {
					this.events[index].active = true;
				}
			},
			toggleDirection() {
				switch (this.layout) {
					case "horizontal":
						this.layout = "vertical";
						break;
					case "vertical":
						this.layout = "horizontal";
						break;
				}
			},
		},
	};
</script>
