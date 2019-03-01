describe ("cipher", () => {

  it('cipher deberia ser un objeto', () => {
    assert.equal(typeof cipher, "object")
  });

  describe("cipher.suma", () => {
    it("cipher.suma deberia ser una funcion", () => {
      assert.equal(typeof cipher.suma, "function")
    })
    it('cipher.suma debe sumar 2 numeros para ello cuando a = 3, b = 5, debe retornar 8', () => {
      assert.equal(cipher.suma(3, 5), 8)
    })
    it("cipher.suma debe retornar un number", () => {
      assert.equal(typeof cipher.suma(), "number")
    })
    it("cipher.suma debe concatenar 2 strings, para ello cuando a= bebe, b = bebecita; debe retornar bebe bebecita", () => {
      assert.equal(cipher.suma("bebe", " bebecita") , "bebe bebecita")
    })
  });

  describe("cipher.resta", () => {
    it("cipher.resta deberia ser una funcion", () => {
      assert.equal(typeof cipher.resta , "function")
    })
    it("en cipher.resta el primer parametro deberia ser mayor que el segundo, para ello si a=9 y b=1; debe retornar 8", () => {
      assert.equal(cipher.resta(9, 1) , 8)
    })
    it("en cipher.resta el primer valor debería ser mayor al segundo, para ello si a=1 y b=2, debe retornar falso", () => {
      assert.equal(cipher.resta(1, 2), false)
    })
  })

});