import {Component, UI} from "@intelinvest/platform/src/app/ui";

@Component({
    // language=Vue
    template: `
      <v-container fluid class="selectable">
          <table class="table">
            <tr
                v-for="(value, name) in event"
                :key="name"
            >
              <td>{{name}}</td>
              <td>{{value}}</td>
            </tr>
          </table>
      {{event}}
      </v-container>
    `
})
export class EventPage extends UI {
    private event: any = {};

    async created(): Promise<void> {
        const id = Number(this.$route.params.eventId);

        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        };

        const response = await fetch("http://localhost:3004/events", params);
        const events = await response.json();
        this.event = events[id];
    }
}