import {EmptyComponent} from "../components/emptyComponent";
import {UI} from "@intelinvest/platform/src/app/ui";
import {Modal} from "../components/Modal";

/**
 * Реестр стандартных UI-компонентов, фильтров и директив
 */
export class UIRegistry {

    /**
     * Инициализация реестра компонентов, фильтров и директив
     */
    static init(): void {
        // TODO инициализация глобальных компонентов тут
        // компоненты
        UI.component("empty-component", EmptyComponent);
        UI.component("Modal", Modal);
    }
}
