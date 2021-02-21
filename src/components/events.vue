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
				class="relative overflow-x-auto max-w-sm md:max-w-2xl xl:max-w-7xl"
			>
				<div
					:class="[
						'flex items-center',
						layout == 'horizontal' ? 'flex-col' : 'flex-row',
					]"
				>
					<div
						:class="[
							'flex items-center relative',
							layout == 'horizontal'
								? 'flex-row pl-20'
								: 'flex-col py-10',
						]"
						@mouseleave="event.active = false"
						v-for="(event, index) in timeLineEvents"
						:key="event.id"
					>
						<div
							v-show="event.active"
							class="bg-white p-1 space-x-1 shadow rounded flex justify-around absolute"
							:class="
								layout == 'horizontal' ? 'inset-y-8 left-0' : 'top-0'
							"
						>
							<svg
								@click="addEvent"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								class="w-5 cursor-pointer"
							>
								<path
									d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<svg
								@click="changeEvent(event, index)"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								class="w-5 cursor-pointer"
							>
								<path d="M5 13l4 4L19 7" />
							</svg>

							<svg
								@click="deleteEvent(event.id)"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								class="w-5 cursor-pointer"
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
								v-model="timeLineEvents[index].name"
								maxlength="12"
								class="resize-none m-1 h-7 max-w-28 font-bold uppercase text-center text-gray-900 bg-transparent focus:outline-none"
							/>
							<input
								@focus="activate(index)"
								@change="changeEvent(event, index)"
								maxlength="12"
								type="text"
								v-model="timeLineEvents[index].date"
								class="m-0.1 max-w-28 text-center text-gray-900 text-xs bg-transparent focus:outline-none"
							/>
						</div>
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
			return { layout: "vertical" };
		},
		computed: {
			timeLineEvents() {
				return this.events.reverse();
			},
		},
		methods: {
			changeEvent(e, index) {
				this.$emit("changeEvent", e);
				this.timeLineEvents[index].active = false;
			},

			deleteEvent(e) {
				this.$emit("deleteEvent", e);
			},
			addEvent() {
				this.$emit("addEvent");
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
