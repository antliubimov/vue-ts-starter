import {Component, UI} from "@intelinvest/platform/src/app/ui";

@Component({
    // language=Vue
    template: `
      <transition name="modal-fade">
          <div class="modal-backdrop">
            <div class="modal"
                 role="dialog"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription"
            >
              <header
                  class="modal-header"
                  id="modalTitle"
              >
                <h3>
                  Выбранные события
                </h3>
                <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal"
                >
                  x
                </button>
              </header>

              <section
                  class="modal-body"
                  id="modalDescription"
              >
                <p>
                  {{$attrs.items}}
                </p>
              </section>

              <footer class="modal-footer">
                <button
                    type="button"
                    class="btn-green"
                    @click="close"
                    aria-label="Close modal"
                >
                  Закрыть
                </button>
              </footer>
            </div>
          </div>
      </transition>
    `
})

export class Modal extends UI {
    close() {
        this.$emit("close");
    }
}