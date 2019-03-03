describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hij" para "abc" con offset 33', () => {
      assert.equal(cipher.encode(33, "abc"), "hij");
    });

    it('debería retornar "456" para "123" con offset 33', () => {
      assert.equal(cipher.encode(33, "123"), "456");
    });

    it('debería retornar "&(" para "#%" con offset 33', () => {
      assert.equal(cipher.encode(33, "#%"), "&(");
    });

    it('debería retornar ":;<" para "<=>" con offset 33', () => {
      assert.equal(cipher.encode(33, "<=>"), ":;<");
    });

    it('debería retornar "^`" para "[]" con offset 33', () => {
      assert.equal(cipher.encode(33, "[]"), "^`");
    });

    it('debería retornar " " para " " con offset 33', () => {
      assert.equal(cipher.encode(33, " "), " ");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abc" para "hij" con offset 33', () => {
      assert.equal(cipher.decode(33, "hij"), "abc");
    });

    it('debería retornar "123" para "456" con offset 33', () => {
      assert.equal(cipher.decode(33, "456"), "123");
    });

    it('debería retornar "#%" para "&(" con offset 33', () => {
      assert.equal(cipher.decode(33, "&("), "#%");
    });

    it('debería retornar "<=>" para ":;<" con offset 33', () => {
      assert.equal(cipher.decode(33, ":;<"), "<=>");
    });

    it('debería retornar "[]" para "^`" con offset 33', () => {
      assert.equal(cipher.decode(33, "^`"), "[]");
    });

    it('debería retornar " " para " " con offset 33', () => {
      assert.equal(cipher.decode(33, " "), " ");
    });
});
});