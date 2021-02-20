<template>
	<events :events="events" @changeEvent="changeEvent" />
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
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 2, name: "test", date: "08 Jan", active: false },
					{ id: 3, name: "test", date: "08 Jan", active: false },
				],
			};
		},
		methods: {
			changeEvent(e) {
				// console.log(e);
			},
		},
	};
</script>