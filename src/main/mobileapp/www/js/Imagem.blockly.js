window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.Imagem = window.blockly.js.Imagem || {};

/**
 * Imagem
 */
window.blockly.js.Imagem.ObterFotoMobile = function() {
 var item, enderecoImagem;
  this.cronapi.cordova.camera.getPicture(function(sender_item) {
      item = sender_item;
    this.cronapi.cordova.file.readFile(enderecoImagem, function(sender_item) {
        item = sender_item;
      this.cronapi.screen.notify('success',enderecoImagem);
    }.bind(this), function(sender_item) {
        item = sender_item;
    }.bind(this), 'ARRAYBUFFER');
  }.bind(this), function(sender_item) {
      item = sender_item;
  }.bind(this), '0', '1', '0', 'false');
}
