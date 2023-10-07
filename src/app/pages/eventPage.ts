import {Component, UI} from "@intelinvest/platform/src/app/ui";

@Component({
    // language=Vue
    template: `
      <v-container fluid class="selectable">
          <table class="table">
            <tr v-for="(value, key) in clickedEvent">
              <td>{{key}}</td>
              <td>{{value}}</td>
            </tr>
          </table>
      </v-container>
    `
})
export class EventPage extends UI {
    private clickedEvent: any;

    async created(): Promise<void> {
        this.clickedEvent = this.$route.query;
    }
}