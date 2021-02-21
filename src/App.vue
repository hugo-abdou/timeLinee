<template>
	<events
		:events="events"
		@changeEvent="changeEvent"
		@deleteEvent="deleteEvent"
		@addEvent="showModel = true"
	/>
	<div
		v-show="showModel"
		class="w-screen h-screen bg-gray-900 bg-opacity-50 absolute inset-0 z-50 flex items-center justify-center"
	>
		<div
			class="w-80 bg-gray-50 shadow-lg rounded-md space-y-5 py-5"
			:class="error ? 'border-2 border-red-500' : ''"
		>
			<input
				required
				v-model="newEvent.name"
				placeholder="Event Name"
				type="text"
				class="mx-auto w-9/12 block p-2 rounded-md border focus:outline-none placeholder-gray-400 font-semibold"
			/>
			<input
				required
				v-model="newEvent.date"
				placeholder="Event Date"
				type="text"
				class="mx-auto w-9/12 block p-2 rounded-md border focus:outline-none placeholder-gray-400 font-semibold"
			/>
			<div class="flex justify-around font-semibold">
				<button
					@click="cancel"
					class="bg-red-400 rounded-md font-semibold px-2 text-white border shadow focus:outline-none"
				>
					cancel
				</button>
				<button
					@click="add"
					class="bg-blue-400 rounded-md px-2 font-semibold text-white border shadow focus:outline-none"
				>
					Add Event
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import events from "./components/events.vue";
	export default {
		components: { events },
		data() {
			return {
				events: [
					{ id: 1, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
				],
				newEvent: { name: "", date: "" },
				showModel: false,
				error: false,
			};
		},
		methods: {
			cancel() {
				this.showModel = false;
				this.newEvent = { name: "", date: "" };
			},
			add() {
				if (this.newEvent.name && this.newEvent.date) {
					this.events.push({
						id: Math.floor(Math.random() * 1000),
						name: this.newEvent.name,
						date: this.newEvent.date,
						active: false,
					});
					this.cancel();
					this.error = false;
				} else {
					this.error = true;
				}
			},
			deleteEvent(e) {
				this.events = this.events.filter((event) => event.id !== e);
			},
			changeEvent(e, id) {
				console.log(e, id);
			},
		},
		updated() {
			if (this.events.length == 0) {
				this.showModel = true;
			}
		},
	};
</script>