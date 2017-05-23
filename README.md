# rulers
rulers bookmarklet - tool for checking pixel perfection and alignment of elements on page.

Just create new bookmark use this as bookmark link:

```javascript
javascript:(function()%7B%22use%20strict%22%3Bvar%20_rlrsRulers%3Dfunction()%7Bthis.bodyRef%3Ddocument.querySelector(%22body%22)%2Cthis.workspace%3Ddocument.createElement(%22div%22)%2Cthis.workspace.style.position%3D%22absolute%22%2Cthis.workspace.style.left%3D%220%22%2Cthis.workspace.style.top%3D%220%22%2Cthis.workspace.style.width%3D%220%22%2Cthis.workspace.style.height%3D%220%22%2Cthis.workspace.style.overflow%3D%22visible%22%2Cthis.workspace.style.all%3D%22initial%22%2Cthis.bodyRef.appendChild(this.workspace)%3Bvar%20t%3D!1%3Bdocument.body.attachShadow%26%26(t%3D!0)%2Cthis.rootSpace%3Dt%3Fthis.workspace.attachShadow(%7Bmode%3A%22closed%22%7D)%3Athis.workspace%2Cthis.htmlRef%3Ddocument.documentElement%2Cthis.rlrs_height%3DMath.max(this.bodyRef.scrollHeight%2Cthis.bodyRef.offsetHeight%2Cthis.htmlRef.clientHeight%2Cthis.htmlRef.scrollHeight%2Cthis.htmlRef.offsetHeight)%2Cthis.rlrs_width%3DMath.max(this.bodyRef.scrollWidth%2Cthis.bodyRef.offsetWidth%2Cthis.htmlRef.clientWidth%2Cthis.htmlRef.scrollWidth%2Cthis.htmlRef.offsetWidth)%2Cthis.rlrs_movingRuler%3Dnull%2Cdocument.addEventListener(%22mousemove%22%2Cthis._mouseMove.bind(this))%2Cthis.scaleVertical%3D%22._rlrs_scaleVert%20%7B%22%2Cthis.scaleVertical%2B%3D%22background-image%3A%20url('data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADIAAABkCAYAAADE6GNbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%2BbN%2FrXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz%2FSMBAPh%2BPDwrIsAHvgABeNMLCADATZvAMByH%2Fw%2FqQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%2BbTAICd%2BJl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA%2Fg88wAAKCRFRHgg%2FP9eM4Ors7ONo62Dl8t6r8G%2FyJiYuP%2B5c%2BrcEAAAOF0ftH%2BLC%2BzGoA7BoBt%2FqIl7gRoXgugdfeLZrIPQLUAoOnaV%2FNw%2BH48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl%2FAV%2F1s%2BX48%2FPf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H%2FLcL%2F%2Fwd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%2BwM%2B3zUAsGo%2BAXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93%2F%2B8%2F%2FUegJQCAZkmScQAAXkQkLlTKsz%2FHCAAARKCBKrBBG%2FTBGCzABhzBBdzBC%2FxgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD%2FphCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%2BQ8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%2BxdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%2BcQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%2BksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%2BQh8lsKnWJAcaT4U%2BIoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%2Bh0uhHdlR5Ol9BX0svpR%2BiX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%2BYTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%2BpXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q%2FpH5Z%2FYkGWcNMw09DpFGgsV%2FjvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY%2FR27iz2qqaE5QzNKM1ezUvOUZj8H45hx%2BJx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4%2FOBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%2B6Ynr5egJ5Mb6feeb3n%2Bhx9L%2F1U%2FW36p%2FVHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%2Beb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%2B6TvZN9un2N%2FT0HDYfZDqsdWh1%2Bc7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%2BLpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26%2FuNu5p7ofcn8w0nymeWTNz0MPIQ%2BBR5dE%2FC5%2BVMGvfrH5PQ0%2BBZ7XnIy9jL5FXrdewt6V3qvdh7xc%2B9j5yn%2BM%2B4zw33jLeWV%2FMN8C3yLfLT8Nvnl%2BF30N%2FI%2F9k%2F3r%2F0QCngCUBZwOJgUGBWwL7%2BHp8Ib%2BOPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%2Bqi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt%2F87fOH4p3iC%2BN7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi%2FRNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%2Bpn5mZ2y6xlhbL%2BxW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a%2FzYnKOZarnivN7cyzytuQN5zvn%2F%2FtEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%2B1dT1gvWd%2B1YfqGnRs%2BFYmKrhTbF5cVf9go3HjlG4dvyr%2BZ3JS0qavEuWTPZtJm6ebeLZ5bDpaql%2BaXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO%2FPLi8ZafJzs07P1SkVPRU%2BlQ27tLdtWHX%2BG7R7ht7vPY07NXbW7z3%2FT7JvttVAVVN1WbVZftJ%2B7P3P66Jqun4lvttXa1ObXHtxwPSA%2F0HIw6217nU1R3SPVRSj9Yr60cOxx%2B%2B%2Fp3vdy0NNg1VjZzG4iNwRHnk6fcJ3%2FceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%2B0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%2B%2B6EHTh0kX%2Fi%2Bc7vDvOXPK4dPKy2%2BUTV7hXmq86X23qdOo8%2FpPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb%2F1tWeOT3dvfN6b%2FfF9%2FXfFt1%2Bcif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%2B3Njv3H9qwHeg89HcR%2FcGhYPP%2FpH1jw9DBY%2BZj8uGDYbrnjg%2BOTniP3L96fynQ89kzyaeF%2F6i%2FsuuFxYvfvjV69fO0ZjRoZfyl5O%2FbXyl%2FerA6xmv28bCxh6%2ByXgzMV70VvvtwXfcdx3vo98PT%2BR8IH8o%2F2j5sfVT0Kf7kxmTk%2F8EA5jz%2FGMzLdsAAAAgY0hSTQAAeiUAAICDAAD5%2FwAAgOkAAHUwAADqYAAAOpgAABdvkl%2FFRgAAAQ5JREFUeNrs2sGtgkAUBdA3RbinEFbs%2BX1RAMtfhXt6oANCCxQwf6uJieN3VDDn7YgGMjned0NiyjlH5ekjItZ1PY3j%2BHv5wTAMPxeX55oPTbUP0nVd0Q2naUq7PggRIkSI7E6kL%2FlSgci9Ob%2F0IE3TVP8t3pplWZKM2FpEiBAhotk1u4zYWkSIECGi2TW7jNhaRIgQIaLZNbuMECFChMi3i%2FTP3rhCsz%2FU%2BjcPklJ6S3v%2Fd3LO6W0Z2bbtNM%2FzlUjbtjLysa1FhAgRIsd6Zy8Q8c4uI7YWESJEiGh2zS4jthYRIkSIaHbNLiO2FhEiRIhods0uI0SIECFyRJE%2BXjAVmv2xg0TErv8tVzp%2FAwBtqXy1W5ugIQAAAABJRU5ErkJggg%3D%3D')%3B%22%2Cthis.scaleVertical%2B%3D%22background-position%3A%200px%200px%3B%20background-repeat%3A%20repeat-y%3B%20height%3A%20100%25%3B%20margin-left%3A%20-25px%3B%20width%3A%2050px%3B%22%2Cthis.scaleVertical%2B%3D%22%7D%22%2Cthis.scaleHorizontal%3D%22._rlrs_scaleHor%20%7B%22%2Cthis.scaleHorizontal%2B%3D%22background-image%3A%20url('data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6%2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%2BbN%2FrXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz%2FSMBAPh%2BPDwrIsAHvgABeNMLCADATZvAMByH%2Fw%2FqQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%2BbTAICd%2BJl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA%2Fg88wAAKCRFRHgg%2FP9eM4Ors7ONo62Dl8t6r8G%2FyJiYuP%2B5c%2BrcEAAAOF0ftH%2BLC%2BzGoA7BoBt%2FqIl7gRoXgugdfeLZrIPQLUAoOnaV%2FNw%2BH48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl%2FAV%2F1s%2BX48%2FPf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H%2FLcL%2F%2Fwd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%2BwM%2B3zUAsGo%2BAXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93%2F%2B8%2F%2FUegJQCAZkmScQAAXkQkLlTKsz%2FHCAAARKCBKrBBG%2FTBGCzABhzBBdzBC%2FxgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD%2FphCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%2BQ8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%2BxdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%2BcQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%2BksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%2BQh8lsKnWJAcaT4U%2BIoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%2Bh0uhHdlR5Ol9BX0svpR%2BiX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%2BYTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%2BpXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q%2FpH5Z%2FYkGWcNMw09DpFGgsV%2FjvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY%2FR27iz2qqaE5QzNKM1ezUvOUZj8H45hx%2BJx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4%2FOBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%2B6Ynr5egJ5Mb6feeb3n%2Bhx9L%2F1U%2FW36p%2FVHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%2Beb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%2B6TvZN9un2N%2FT0HDYfZDqsdWh1%2Bc7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%2BLpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26%2FuNu5p7ofcn8w0nymeWTNz0MPIQ%2BBR5dE%2FC5%2BVMGvfrH5PQ0%2BBZ7XnIy9jL5FXrdewt6V3qvdh7xc%2B9j5yn%2BM%2B4zw33jLeWV%2FMN8C3yLfLT8Nvnl%2BF30N%2FI%2F9k%2F3r%2F0QCngCUBZwOJgUGBWwL7%2BHp8Ib%2BOPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%2Bqi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt%2F87fOH4p3iC%2BN7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi%2FRNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%2Bpn5mZ2y6xlhbL%2BxW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a%2FzYnKOZarnivN7cyzytuQN5zvn%2F%2FtEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%2B1dT1gvWd%2B1YfqGnRs%2BFYmKrhTbF5cVf9go3HjlG4dvyr%2BZ3JS0qavEuWTPZtJm6ebeLZ5bDpaql%2BaXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO%2FPLi8ZafJzs07P1SkVPRU%2BlQ27tLdtWHX%2BG7R7ht7vPY07NXbW7z3%2FT7JvttVAVVN1WbVZftJ%2B7P3P66Jqun4lvttXa1ObXHtxwPSA%2F0HIw6217nU1R3SPVRSj9Yr60cOxx%2B%2B%2Fp3vdy0NNg1VjZzG4iNwRHnk6fcJ3%2FceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%2B0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%2B%2B6EHTh0kX%2Fi%2Bc7vDvOXPK4dPKy2%2BUTV7hXmq86X23qdOo8%2FpPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb%2F1tWeOT3dvfN6b%2FfF9%2FXfFt1%2Bcif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%2B3Njv3H9qwHeg89HcR%2FcGhYPP%2FpH1jw9DBY%2BZj8uGDYbrnjg%2BOTniP3L96fynQ89kzyaeF%2F6i%2FsuuFxYvfvjV69fO0ZjRoZfyl5O%2FbXyl%2FerA6xmv28bCxh6%2ByXgzMV70VvvtwXfcdx3vo98PT%2BR8IH8o%2F2j5sfVT0Kf7kxmTk%2F8EA5jz%2FGMzLdsAAAAgY0hSTQAAeiUAAICDAAD5%2FwAAgOkAAHUwAADqYAAAOpgAABdvkl%2FFRgAAAPVJREFUeNrs27FthEAQRuHZa4ECIEWiCvItgSac0BdugTKul3FgyZF1tnSytex9T0J%2FMsnwNMMklMwMNEEtpRw376EtCCEEhBDy7x%2FDJASEEAJCCAEheE5InaYpG6779Xl8hT5MiJUFQggBIYSAkBcRUtd1zQf5dU%2Br%2B%2Fs6E2Jl4aGQfd%2BPiIir53meXaQJsbJAyJWEbNv2FhFx9ZznuYu8Lctyj4i4eg7D0EVaWa2RmT89dRzHbLnus40%2B%2BjAhriwQQggIIQSEvAClg79waynlyMzSQx8mxMoCIYSAEEJAyPe8d3DymhBCQAgheJoPAAAA%2F%2F8DAPIWiH9lgUKoAAAAAElFTkSuQmCC')%3B%22%2Cthis.scaleHorizontal%2B%3D%22background-position%3A%200px%200px%3B%20background-repeat%3A%20repeat-x%3B%20width%3A%20100%25%3B%20margin-top%3A%20-25px%3B%20height%3A%2050px%3B%22%2Cthis.scaleHorizontal%2B%3D%22%7D%22%2Cthis.headRef%3Ddocument.head%7C%7Cdocument.getElementsByTagName(%22head%22)%5B0%5D%2Cthis.rulersStyles%3D%22%3Cstyle%3E%22%2Cthis.rulersStyles%2B%3Dthis.scaleVertical%2Bthis.scaleHorizontal%2Cthis.rulersStyles%2B%3D%22%3C%2Fstyle%3E%22%2Cthis.headRef.innerHTML%2B%3Dthis.rulersStyles%2Cthis.rulerColor%3D%22rgba(255%2C30%2C0%2C1)%22%2Cthis.panelRef%3Dnull%2Cthis._buildControlPanel()%3Bvar%20e%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7B%7D%3Bif(e.rulers)for(var%20r%20in%20e.rulers)%7Bvar%20l%3D%7Bhash%3Ae.rulers%5Br%5D.hash%2Ctype%3Ae.rulers%5Br%5D.type%2Cleft%3Ae.rulers%5Br%5D.left%2Ctop%3Ae.rulers%5Br%5D.top%2Cscope%3Ae.rulers%5Br%5D.scope%7D%3Bthis.__createRuler(l)%7D%7D%3B_rlrsRulers.prototype.__newHash%3Dfunction()%7Breturn%20Math.random().toString(36).replace(%2F%5B%5Ea-z%5D%2B%2Fg%2C%22%22).substr(0%2C10)%7D%2C_rlrsRulers.prototype._rulerSelected%3Dfunction(t)%7Bthis._rlrs_movingRuler%3Dt%7D%2C_rlrsRulers.prototype._rulerDeselected%3Dfunction(t)%7Bvar%20e%3Dt.getAttribute(%22data-hash%22)%2Cr%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%3Bfor(var%20l%20in%20r.rulers)r.rulers%5Bl%5D.hash%3D%3D%3De%26%26(r.rulers%5Bl%5D.left%3Dt.style.left%2Cr.rulers%5Bl%5D.top%3Dt.style.top)%3BlocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(r))%2Cthis._rlrs_movingRuler%3Dnull%7D%2C_rlrsRulers.prototype._activateListener%3Dfunction(t)%7Bvar%20e%3Dthis%3Bt.addEventListener(%22mousedown%22%2Cfunction()%7Be._rulerSelected(t)%7D.bind(t))%2Ct.addEventListener(%22mouseup%22%2Cfunction()%7Be._rulerDeselected(t)%7D.bind(t))%7D%2C_rlrsRulers.prototype.__createRuler%3Dfunction(t)%7Bvar%20e%3D%22%22%2Bthis.rlrs_height%2B%22px%22%2Cr%3D%22%22%2Bthis.rlrs_width%2B%22px%22%3B%22%22%2BMath.floor(this.rlrs_height%2F2)%2B%22px%22%3Bvar%20l%3D%22%22%2BMath.floor(this.rlrs_width%2F2)%2B%22px%22%2Cs%3D%22%22%2B(Math.floor(screen.height%2F2)%2Bwindow.pageYOffset)%2B%22px%22%2Co%3Dt.hash%3Ft.hash%3Athis.__newHash()%2Ca%3Ddocument.createElement(%22div%22)%3Ba.classList.add(%22_rlrs_ruler%22)%3Bvar%20i%3D%22background%3A%20rgba(255%2C255%2C255%2C0)%3B%22%3Bif(%22v%22%3D%3D%3Dt.type%3F(i%2B%3D%22background%3A%20-moz-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20-webkit-gradient(left%20top%2C%20right%20top%2C%20color-stop(0%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(33%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(34%25%2C%20rgba(255%2C30%2C0%2C1))%2C%20color-stop(66%25%2C%20rgba(240%2C46%2C22%2C1))%2C%20color-stop(67%25%2C%20rgba(240%2C47%2C23%2C0))%2C%20color-stop(100%25%2C%20rgba(231%2C56%2C39%2C0)))%3B%22%2Ci%2B%3D%22background%3A%20-webkit-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20-o-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20-ms-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20linear-gradient(to%20right%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(%20startColorstr%3D'%23ffffff'%2C%20endColorstr%3D'%23e73827'%2C%20GradientType%3D1%20)%3B%22)%3A(i%2B%3D%22background%3A%20-moz-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20-webkit-gradient(left%20top%2C%20left%20bottom%2C%20color-stop(0%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(33%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(34%25%2C%20rgba(255%2C30%2C0%2C1))%2C%20color-stop(66%25%2C%20rgba(240%2C46%2C22%2C1))%2C%20color-stop(67%25%2C%20rgba(240%2C47%2C23%2C0))%2C%20color-stop(100%25%2C%20rgba(231%2C56%2C39%2C0)))%3B%22%2Ci%2B%3D%22background%3A%20-webkit-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20-o-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20-ms-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22background%3A%20linear-gradient(to%20bottom%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Ci%2B%3D%22filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(%20startColorstr%3D'%23ffffff'%2C%20endColorstr%3D'%23e73827'%2C%20GradientType%3D0%20)%3B%22)%2Ca.setAttribute(%22style%22%2Ci)%2Ca.style.position%3D%22absolute%22%2Ca.style.overflow%3D%22visible%22%2Ca.style.zIndex%3D9999%2Ca.setAttribute(%22data-type%22%2Ct.type)%2Ca.setAttribute(%22data-hash%22%2Co)%2C%22v%22%3D%3D%3Dt.type%3F(a.style.width%3D%223px%22%2Ca.style.height%3De%2Ca.style.left%3Dt.left%3Ft.left%3Al%2Ca.style.cursor%3D%22col-resize%22%2Ca.style.top%3D%220%22)%3A(a.style.width%3Dr%2Ca.style.height%3D%223px%22%2Ca.style.left%3D%220%22%2Ca.style.cursor%3D%22row-resize%22%2Ca.style.top%3Dt.top%3Ft.top%3As)%2Ct.scope%3D%3D%3D!0%26%26(a.innerHTML%3D%22v%22%3D%3D%3Dt.type%3F'%3Cdiv%20class%3D%22_rlrs_scaleVert%22%3E%3C%2Fdiv%3E'%3A'%3Cdiv%20class%3D%22_rlrs_scaleHor%22%3E%3C%2Fdiv%3E')%2Cthis.rootSpace.appendChild(a)%2Cthis._activateListener(a)%2Ct.notStored)%7Bvar%20n%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7Brulers%3A%5B%5D%7D%3Bn.rulers.push(%7Bhash%3Ao%2Ctype%3At.type%2Cleft%3Aa.style.left%2Ctop%3Aa.style.top%2Cscope%3At.scope%7D)%2ClocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(n))%7D%7D%2C_rlrsRulers.prototype._createRulerVertical%3Dfunction()%7Bvar%20t%3D%7Btype%3A%22v%22%2CnotStored%3A!0%7D%3Bthis.__createRuler(t)%7D%2C_rlrsRulers.prototype._createRulerHorizontal%3Dfunction()%7Bvar%20t%3D%7Btype%3A%22h%22%2CnotStored%3A!0%7D%3Bthis.__createRuler(t)%7D%2C_rlrsRulers.prototype._createScopedRulerVertical%3Dfunction()%7Bvar%20t%3D%7Btype%3A%22v%22%2CnotStored%3A!0%2Cscope%3A!0%7D%3Bthis.__createRuler(t)%7D%2C_rlrsRulers.prototype._createScopedRulerHorizontal%3Dfunction()%7Bvar%20t%3D%7Btype%3A%22h%22%2CnotStored%3A!0%2Cscope%3A!0%7D%3Bthis.__createRuler(t)%7D%2C_rlrsRulers.prototype.__resetRulers%3Dfunction()%7Bif(confirm(%22All%20rulers%20will%20be%20deleted.%20Do%20you%20agree%3F%22))%7Bfor(var%20t%3Ddocument.querySelectorAll(%22._rlrs_ruler%22)%2Ce%3Dt.length-1%3Be%3E%3D0%3Be--)this.rootSpace.removeChild(t%5Be%5D)%3Breturn%20this.__saveToStorage(%22rulers%22%2C%5B%5D)%2C!0%7Dreturn!1%7D%2C_rlrsRulers.prototype._importRulers%3Dfunction()%7Bvar%20t%3Ddocument.querySelector(%22%23_rlrs_ioInput%22)%3Bif(t.value.length%26%26this.__resetRulers())%7Bvar%20e%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7Brulers%3A%5B%5D%7D%3Be.rulers%3DJSON.parse(t.value)%2ClocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(e))%7D%7D%2C_rlrsRulers.prototype._exportRulers%3Dfunction()%7Bvar%20t%3Ddocument.querySelector(%22%23_rlrs_ioInput%22)%2Ce%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7Brulers%3A%5B%5D%7D%3Bt.value%3DJSON.stringify(e.rulers)%2Ct.focus()%2CsetTimeout(function()%7Bt.select()%7D%2C0)%7D%2C_rlrsRulers.prototype.__saveToStorage%3Dfunction(t%2Ce)%7Bvar%20r%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7B%7D%3Br%5Bt%5D%3De%2ClocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(r))%7D%2C_rlrsRulers.prototype._mouseMove%3Dfunction(t)%7Bthis._rlrs_movingRuler%26%26(%22v%22%3D%3D%3Dthis._rlrs_movingRuler.getAttribute(%22data-type%22)%3F(this._rlrs_movingRuler.style.left%3Dt.pageX%2B%22px%22%2Cthis._rlrs_movingRuler.children.length%3E0%26%26this._rlrs_movingRuler.children%5B0%5D.classList.contains(%22_rlrs_scaleVert%22)%26%26(this._rlrs_movingRuler.children%5B0%5D.style.backgroundPosition%3D%220px%20%22%2Bt.pageY%2B%22px%22))%3A(this._rlrs_movingRuler.style.top%3Dt.pageY%2B%22px%22%2Cthis._rlrs_movingRuler.children.length%3E0%26%26this._rlrs_movingRuler.children%5B0%5D.classList.contains(%22_rlrs_scaleHor%22)%26%26(this._rlrs_movingRuler.children%5B0%5D.style.backgroundPosition%3Dt.pageX%2B%22px%20%22%2B0%2B%22px%22)))%7D%2C_rlrsRulers.prototype.__makeButton%3Dfunction()%7Bvar%20t%3Ddocument.createElement(%22span%22)%3Breturn%20t.style.display%3D%22inline-block%22%2Ct.style.margin%3D%222px%22%2Ct.style.padding%3D%223px%205px%22%2Ct.style.background%3D%22%23333%22%2Ct.style.color%3D%22%23efefef%22%2Ct.style.cursor%3D%22pointer%22%2Ct.style.borderRadius%3D%223px%22%2Ct.style.boxShadow%3D%220%200%202px%20%23ccc%22%2Ct%7D%2C_rlrsRulers.prototype.__makeSmallButton%3Dfunction()%7Bvar%20t%3Ddocument.createElement(%22span%22)%3Breturn%20t.style.display%3D%22inline-block%22%2Ct.style.margin%3D%222px%22%2Ct.style.padding%3D%222px%22%2Ct.style.background%3D%22%23333%22%2Ct.style.color%3D%22%23efefef%22%2Ct.style.cursor%3D%22pointer%22%2Ct.style.borderRadius%3D%222px%22%2Ct.style.boxShadow%3D%220%200%202px%20%23ccc%22%2Ct.style.width%3D%228px%22%2Ct.style.height%3D%228px%22%2Ct%7D%2C_rlrsRulers.prototype._buildControlPanel%3Dfunction()%7Bvar%20t%3Ddocument.createElement(%22div%22)%3Bt.setAttribute(%22id%22%2C%22_rlrs_panel%22)%2Ct.style.fontFamily%3D%22Verdana%2C%20Geneva%2C%20sans-serif%22%2Ct.style.fontSize%3D%2212px%22%2Ct.style.position%3D%22fixed%22%2Ct.style.background%3D%22rgba(200%2C200%2C200%2C0.8)%22%2Ct.style.border%3D%221px%20dashed%20%23999%22%2Ct.style.width%3D%22100px%22%2Ct.style.height%3D%22300px%22%2Ct.style.left%3D%222px%22%2Ct.style.top%3D%222px%22%2Ct.style.borderRadius%3D%224px%22%2Ct.style.zIndex%3D99999%2Ct.style.boxShadow%3D%220%200%204px%20%23ccc%22%2Ct.style.padding%3D%2210px%22%2Ct.style.textAlign%3D%22center%22%3Bvar%20e%3Ddocument.createElement(%22div%22)%3Be.textContent%3D%22rulers.js%22%2Ce.style.color%3D%22%23555%22%2Ce.style.textAlign%3D%22center%22%2Ce.style.fontSize%3D%2210px%22%2Ce.style.borderBottom%3D%221px%20dotted%20%23777%22%3Bvar%20r%3Dthis.__makeButton()%3Br.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%20%7C%20%20%3C%2Fstrong%3E%22%2Cr.addEventListener(%22click%22%2Cthis._createRulerVertical.bind(this))%3Bvar%20l%3Dthis.__makeButton()%3Bl.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%E2%80%94%20%3C%2Fstrong%3E%22%2Cl.addEventListener(%22click%22%2Cthis._createRulerHorizontal.bind(this))%3Bvar%20s%3Dthis.__makeButton()%3Bs.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%C7%82%20%7C%20%20%3C%2Fstrong%3E%22%2Cs.addEventListener(%22click%22%2Cthis._createScopedRulerVertical.bind(this))%3Bvar%20o%3Dthis.__makeButton()%3Bo.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%C7%82%20%E2%80%94%20%3C%2Fstrong%3E%22%2Co.addEventListener(%22click%22%2Cthis._createScopedRulerHorizontal.bind(this))%3Bvar%20a%3Dthis.__makeButton()%3Ba.innerHTML%3D%22%3Csmall%3Eimport%3C%2Fsmall%3E%22%2Ca.addEventListener(%22click%22%2Cthis._importRulers.bind(this))%3Bvar%20i%3Dthis.__makeButton()%3Bi.innerHTML%3D%22%3Csmall%3Eexport%3C%2Fsmall%3E%22%2Ci.addEventListener(%22click%22%2Cthis._exportRulers.bind(this))%3Bvar%20n%3Ddocument.createElement(%22input%22)%3Bn.setAttribute(%22id%22%2C%22_rlrs_ioInput%22)%2Cn.style.display%3D%22block%22%2Cn.style.width%3D%22100%25%22%2Cn.style.padding%3D%220%22%3Bvar%20p%3Ddocument.createElement(%22hr%22)%2Cg%3Dthis.__makeButton()%3Bg.innerHTML%3D%22%3Cstrong%3Ereset%3C%2Fstrong%3E%22%2Cg.addEventListener(%22click%22%2Cthis.__resetRulers.bind(this))%3Bvar%20d%3Dthis.__makeSmallButton()%2Ch%3Dthis.__makeSmallButton()%2Cc%3Dthis.__makeSmallButton()%2CA%3Dthis.__makeSmallButton()%3Bd.textContent%3D%22%CB%B9%22%2Cd.style.position%3D%22absolute%22%2Cd.style.lineHeight%3D%2210px%22%2Cd.style.left%3D%222px%22%2Cd.style.top%3D%222px%22%2Cd.addEventListener(%22click%22%2Cthis._setPanelPosition.bind(this%2C%22tl%22))%2Ch.textContent%3D%22%CB%BA%22%2Ch.style.position%3D%22absolute%22%2Ch.style.lineHeight%3D%2210px%22%2Ch.style.right%3D%222px%22%2Ch.style.top%3D%222px%22%2Ch.style.textAlign%3D%22right%22%2Ch.addEventListener(%22click%22%2Cthis._setPanelPosition.bind(this%2C%22tr%22))%2Cc.textContent%3D%22%CB%BB%22%2Cc.style.position%3D%22absolute%22%2Cc.style.lineHeight%3D%220px%22%2Cc.style.left%3D%222px%22%2Cc.style.bottom%3D%222px%22%2Cc.addEventListener(%22click%22%2Cthis._setPanelPosition.bind(this%2C%22bl%22))%2CA.textContent%3D%22%CB%BC%22%2CA.style.position%3D%22absolute%22%2CA.style.lineHeight%3D%220px%22%2CA.style.right%3D%222px%22%2CA.style.bottom%3D%222px%22%2CA.style.textAlign%3D%22right%22%2CA.addEventListener(%22click%22%2Cthis._setPanelPosition.bind(this%2C%22br%22))%2Ct.appendChild(d)%2Ct.appendChild(h)%2Ct.appendChild(c)%2Ct.appendChild(A)%2Ct.appendChild(e)%2Ct.appendChild(r)%2Ct.appendChild(l)%2Ct.appendChild(s)%2Ct.appendChild(o)%2Ct.appendChild(g)%2Ct.appendChild(p)%2Ct.appendChild(a)%2Ct.appendChild(i)%2Ct.appendChild(n)%2Cthis.panelRef%3Dt%2Cthis.rootSpace.appendChild(t)%7D%2C_rlrsRulers.prototype._setPanelPosition%3Dfunction(t)%7Bvar%20e%3Dthis.panelRef%3Bswitch(e.style.left%3D%22auto%22%2Ce.style.right%3D%22auto%22%2Ce.style.top%3D%22auto%22%2Ce.style.bottom%3D%22auto%22%2Ct)%7Bcase%22tl%22%3Ae.style.top%3D%222px%22%2Ce.style.left%3D%222px%22%3Bbreak%3Bcase%22tr%22%3Ae.style.top%3D%222px%22%2Ce.style.right%3D%222px%22%3Bbreak%3Bcase%22bl%22%3Ae.style.bottom%3D%222px%22%2Ce.style.left%3D%222px%22%3Bbreak%3Bcase%22br%22%3Ae.style.bottom%3D%222px%22%2Ce.style.right%3D%222px%22%3Bbreak%3Bdefault%3Ae.style.top%3D%222px%22%2Ce.style.left%3D%222px%22%7D%7D%2CsetTimeout(function()%7Bwindow.rlrs%3Dnew%20_rlrsRulers%7D%2C500)%3B%7D)()
```