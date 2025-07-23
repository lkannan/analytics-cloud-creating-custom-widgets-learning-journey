(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
            .styled-btn {
                display: inline-block !important;
                margin-top: 10px;
                padding: 6px 18px;
                font-size: 1em;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                min-width: 80px;
            }
            #applyBtn {
                background: #0070f2;
                color: #fff;
                margin-right: 10px;
            }
            #applyBtn:hover {
                background: #005bb5;
            }
            #resetBtn {
                background: #e0e0e0;
                color: #222;
            }
            #resetBtn:hover {
                background: #bdbdbd;
            }
			table td {
				padding: 8px 10px;
			}
			fieldset {
				border: 1px solid #ccc;
				border-radius: 6px;
				padding: 12px 18px 18px 18px;
				margin: 0;
			}
			legend {
				font-weight: bold;
				font-size: 1.1em;
				margin-bottom: 8px;
			}
		</style>
		<form id="form">
			<fieldset>
				<legend>Podium Properties</legend>
				<table>
                    <tr>
                        <td><label for="bold_forValues">Values bold factor</label></td>
                        <td><input id="bold_forValues" type="text" size="20" maxlength="10"></td>
                    </tr>
                    <tr>
                        <td><label for="bold_forNames">Names bold factor</label></td>
                        <td><input id="bold_forNames" type="text" size="20" maxlength="10"></td>
                    </tr>
                    <tr>
                        <td><label for="font_color">Font color</label></td>
                        <td>
                            <select id="font_color">
                                <option value="#000000">Black</option>
                                <option value="#FF0000">Red</option>
                                <option value="#0000FF">Blue</option>
                                <option value="#008000">Green</option>
                                <option value="#FFA500">Orange</option>
                                <option value="#800080">Purple</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div style="margin-top: 10px;">
                    <button type="submit" id="applyBtn" class="styled-btn">Apply</button>
                    <button type="button" id="resetBtn" class="styled-btn">Reset</button>
                </div>
            </fieldset>
        </form>
    `;

    class PodiumStylingPanel extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
            this._shadowRoot.getElementById("resetBtn").addEventListener("click", this._reset.bind(this));
        }

        _submit(e) {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        bold_forValues: this.bold_forValues,
                        bold_forNames: this.bold_forNames,
                        font_color: this.font_color
                    }
                }
            }));
        }

        _reset() {
            this.bold_forValues = "400";
            this.bold_forNames = "400";
            this.font_color = "#000000";
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {
                        bold_forValues: this.bold_forValues,
                        bold_forNames: this.bold_forNames,
                        font_color: this.font_color
                    }
                }
            }));
        }


		set bold_forValues(newValue) {
			this._shadowRoot.getElementById("bold_forValues").value = newValue;
		}

		get bold_forValues() {
			return this._shadowRoot.getElementById("bold_forValues").value;
		}

		set bold_forNames(newValue) {
			this._shadowRoot.getElementById("bold_forNames").value = newValue;
		}

		get bold_forNames()  {
			return this._shadowRoot.getElementById("bold_forNames").value;
		}

		set font_color(newValue) {
			this._shadowRoot.getElementById("font_color").value = newValue;
		}
		get font_color() {
			return this._shadowRoot.getElementById("font_color").value;
		}
	}

	customElements.define("com-sap-sample-podium-styling", PodiumStylingPanel);
})();