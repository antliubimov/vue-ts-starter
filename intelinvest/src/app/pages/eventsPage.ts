import {Component, UI} from "@intelinvest/platform/src/app/ui";

interface IEvent {
    date: string,
    totalAmount: string,
    quantity: number,
    label: string,
    comment: string,
    period: number,
    type: string,
}

@Component({
    // language=Vue
    template: `
          <v-container fluid class="selectable">
              Events page
              events size: {{ events.length }}<br/>
              <table class="table">
                <thead>
                    <tr>
                      <th>Дата</th>
                      <th>Сумма</th>
                      <th>Количество</th>
                      <th>Название</th>
                      <th>Комментарий</th>
                      <th>Период</th>
                      <th>Выбор</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(item, index) in events"
                        :key="index"
                        @click="openEvent(item, index)"
                    >
                      <td>{{ item.date }}</td>
                      <td>{{ item.totalAmount }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>{{ item.label }}</td>
                      <td>{{ item.comment }}</td>
                      <td>{{ item.period }}</td>
                      <td @click.stop="">
                        <input type="checkbox" @change="handleChangeSelected(index)"/>
                      </td>
                    </tr>
                </tbody>
              </table>
              <v-btn @click="showSelectedAmount">Показать выбранные</v-btn>
              <p>{{ allSelectedAmounts }}</p>
          </v-container>
    `
})
export class EventsPage extends UI {
    private events: IEvent[] = [];
    private selected: number[] = [];
    private allSelectedAmounts: string = "";

    async created(): Promise<void> {
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        };
        const response = await fetch("http://localhost:3004/events", params);
        this.events = await response.json();
    }

    handleChangeSelected(id: number): void {
        if (this.selected.includes(id)) {
            this.selected = this.selected.filter((select: number): boolean => select !== id);
        } else {
            this.selected.push(id);
        }
    }

    showSelectedAmount(): void {
        type Amount = {
            [key: string]: number;
        };

        const typesAmount: Amount = {};

        for (const index of this.selected) {
            const { type ,totalAmount } = this.events[index];
            typesAmount[type] = (Number(typesAmount[type]) || 0) + Number(totalAmount.slice(4));
        }

        this.allSelectedAmounts = Object.entries(typesAmount).map(([key, value]): string => `${key}: ${value}`).join(", ");
    }

    openEvent(event: any, id: number): void {
        const routeData = this.$router.resolve({ path: "event" });
        window.open(`${routeData.href}/${id}`, "_blank");
    }
}
