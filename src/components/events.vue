<template>
	<div class="bg-gray-50 overflow-auto">
		<div class="flex justify-center h-screen items-center pt-20">
			<div
				class="absolute right-0 left-0 top-0 z-50 bg-gray-100 w-full py-5"
			>
				<button
					@click="toggleDirection"
					class="bg-gray-700 px-3 capitalize py-1 mx-auto block text-white font-semibold hover:bg-gray-600 rounded-full shadow-md focus:outline-none"
				>
					{{ "Switch to " + layout }}
				</button>
			</div>
			<div
				class="relative h-full w-10/12 overflow-auto flex justify-start"
				:class="layout == 'vertical' ? '' : 'flex-col '"
			>
				<div
					class="z-10 min-w-40 flex items-center"
					:class="layout == 'vertical' ? 'flex-col pt-10 ' : 'pl-20'"
					@mouseleave="event.active = false"
					v-for="(event, index) in timeLineEvents"
					:key="event.id"
				>
					<div
						v-show="event.active"
						class="bg-white p-1 space-x-1 shadow rounded flex justify-around absolute"
						:class="layout == 'horizontal' ? ' left-0' : 'top-0'"
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
							@click="
								changeEvent(
									$event.path[2].children[2].children,
									event.id
								)
							"
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
						class="flex items-center justify-center relative"
						:class="
							layout == 'vertical' ? 'w-full' : 'flex-col w-10 h-full'
						"
					>
						<span
							class="bg-gray-900 absolute"
							:class="
								layout == 'vertical' ? 'h-1  w-full' : 'w-1 h-full'
							"
						></span>
						<span
							:class="[
								'w-4 h-4 bg-gray-900 block rounded-full z-10',
								event.active ? 'ring-4' : '',
							]"
						></span>
					</div>
					<div
						class="mx-2 mb-5 space-y-1"
						:class="
							layout == 'vertical'
								? 'max-w-full  text-center'
								: 'max-w-11/12'
						"
					>
						<div
							@focus="event.active = true"
							contenteditable="true"
							class="text-lg font-bold capitalize focus:outline-none"
						>
							{{ event.name }}
						</div>
						<div
							@focus="event.active = true"
							contenteditable="true"
							class="text-sm font-semibold focus:outline-none"
						>
							{{ event.date }}
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
			return { layout: "horizontal" };
		},
		computed: {
			timeLineEvents() {
				return this.events.reverse();
			},
		},
		methods: {
			changeEvent(e, id) {
				let updatedEvent = {
					name: e[0].innerText,
					date: e[1].innerText,
					id: id,
				};
				this.$emit("changeEvent", updatedEvent, id);
				this.activate();
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
				if (index >= 0 && index == !null) {
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