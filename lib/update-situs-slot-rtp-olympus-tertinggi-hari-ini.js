'use babel';

import UpdateSitusSlotRtpOlympusTertinggiHariIniView from './update-situs-slot-rtp-olympus-tertinggi-hari-ini-view';
import { CompositeDisposable } from 'atom';

export default {

  updateSitusSlotRtpOlympusTertinggiHariIniView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.updateSitusSlotRtpOlympusTertinggiHariIniView = new UpdateSitusSlotRtpOlympusTertinggiHariIniView(state.updateSitusSlotRtpOlympusTertinggiHariIniViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.updateSitusSlotRtpOlympusTertinggiHariIniView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'update-situs-slot-rtp-olympus-tertinggi-hari-ini:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.updateSitusSlotRtpOlympusTertinggiHariIniView.destroy();
  },

  serialize() {
    return {
      updateSitusSlotRtpOlympusTertinggiHariIniViewState: this.updateSitusSlotRtpOlympusTertinggiHariIniView.serialize()
    };
  },

  toggle() {
    console.log('UpdateSitusSlotRtpOlympusTertinggiHariIni was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
