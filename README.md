# rulers
rulers bookmarklet - tool for checking pixel perfection and alignment of elements on page.

Just create new bookmark with this url: 

```
javascript:(function()%7B%22use%20strict%22%3Bvar%20_rlrsRulers%3Dfunction()%7Bthis.bodyRef%3Ddocument.querySelector(%22body%22)%3Bthis.workspace%3Ddocument.createElement(%22div%22)%3Bthis.workspace.style.position%3D%22absolute%22%3Bthis.workspace.style.left%3D%220%22%3Bthis.workspace.style.top%3D%220%22%3Bthis.workspace.style.width%3D%220%22%3Bthis.workspace.style.height%3D%220%22%3Bthis.workspace.style.overflow%3D%22visible%22%3Bthis.bodyRef.appendChild(this.workspace)%3Bthis.rootSpace%3Dthis.workspace%3Bthis.htmlRef%3Ddocument.documentElement%3Bthis.rlrs_height%3DMath.max(this.bodyRef.scrollHeight%2Cthis.bodyRef.offsetHeight%2Cthis.htmlRef.clientHeight%2Cthis.htmlRef.scrollHeight%2Cthis.htmlRef.offsetHeight)%3Bthis.rlrs_width%3DMath.max(this.bodyRef.scrollWidth%2Cthis.bodyRef.offsetWidth%2Cthis.htmlRef.clientWidth%2Cthis.htmlRef.scrollWidth%2Cthis.htmlRef.offsetWidth)%3Bthis.rlrs_movingRuler%3Dnull%3Bdocument.addEventListener(%22mousemove%22%2Cthis._mouseMove.bind(this))%3Bthis.scaleVertical%3D%22._rlrs_scaleVert%20%7B%22%3Bthis.scaleVertical%2B%3D%22background-image%3A%20url(data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAkAAAAyCAMAAAC58gFMAAAACVBMVEX%2FAAD%2F%2F%2F%2F%2FAACEEbvXAAAAAnRSTlMAAHaTzTgAAAAmSURBVHgBY2CEARwsBiYmJjyyIIDGYgIBZHW0t4Metg15O5hgAACsSAG4OZBTvgAAAABJRU5ErkJggg%3D%3D)%3B%22%3Bthis.scaleVertical%2B%3D%22background-position%3A%200px%201px%3B%20background-repeat%3A%20repeat-y%3B%20height%3A%20100%25%3B%20margin-left%3A%20-3px%3B%20width%3A%209px%3B%22%3Bthis.scaleVertical%2B%3D%22%7D%22%3Bthis.scaleHorizontal%3D%22._rlrs_scaleHor%20%7B%22%3Bthis.scaleHorizontal%2B%3D%22background-image%3A%20url(data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADIAAAAJCAMAAABHXI%2FtAAAACVBMVEX%2FAAD%2F%2F%2F%2F%2FAACEEbvXAAAAAnRSTlMAAHaTzTgAAAAwSURBVHgBY2AkFTCRr4WBgYkRwUIwsbEYQPqgYggWDkEmOmthgIkhWAgmJos%2BgQwAjSkBuKKlVusAAAAASUVORK5CYII%3D)%3B%22%3Bthis.scaleHorizontal%2B%3D%22background-position%3A%201px%200px%3B%20background-repeat%3A%20repeat-x%3B%20width%3A%20100%25%3B%20margin-top%3A%20-3px%3B%20height%3A%209px%3B%22%3Bthis.scaleHorizontal%2B%3D%22%7D%22%3Bthis.headRef%3Ddocument.head%7C%7Cdocument.getElementsByTagName(%22head%22)%5B0%5D%3Bthis.rulersStyles%3D%22%3Cstyle%3E%22%3Bthis.rulersStyles%2B%3Dthis.scaleVertical%2Bthis.scaleHorizontal%3Bthis.rulersStyles%2B%3D%22%3C%2Fstyle%3E%22%3Bthis.headRef.innerHTML%2B%3Dthis.rulersStyles%3Bthis.rulerColor%3D%22rgba(255%2C30%2C0%2C1)%22%3Bthis._buildControlPanel()%3Bvar%20a%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7B%7D%3Bif(a.rulers)for(var%20b%20in%20a.rulers)this.__createRuler(%7Bhash%3Aa.rulers%5Bb%5D.hash%2Ctype%3Aa.rulers%5Bb%5D.type%2Cleft%3Aa.rulers%5Bb%5D.left%2Ctop%3Aa.rulers%5Bb%5D.top%2Cscope%3Aa.rulers%5Bb%5D.scope%7D)%7D%3B_rlrsRulers.prototype.__newHash%3Dfunction()%7Breturn%20Math.random().toString(36).replace(%2F%5B%5Ea-z%5D%2B%2Fg%2C%22%22).substr(0%2C10)%7D%3B_rlrsRulers.prototype._rulerSelected%3Dfunction(a)%7Bthis._rlrs_movingRuler%3Da%7D%3B_rlrsRulers.prototype._rulerDeselected%3Dfunction(a)%7Bvar%20b%3Da.getAttribute(%22data-hash%22)%2Ce%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%2Cf%3Bfor(f%20in%20e.rulers)e.rulers%5Bf%5D.hash%3D%3D%3Db%26%26(e.rulers%5Bf%5D.left%3Da.style.left%2Ce.rulers%5Bf%5D.top%3Da.style.top)%3BlocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(e))%3Bthis._rlrs_movingRuler%3Dnull%7D%3B_rlrsRulers.prototype._activateListener%3Dfunction(a)%7Bvar%20b%3Dthis%3Ba.addEventListener(%22mousedown%22%2Cfunction()%7Bb._rulerSelected(a)%7D.bind(a))%3Ba.addEventListener(%22mouseup%22%2Cfunction()%7Bb._rulerDeselected(a)%7D.bind(a))%7D%3B_rlrsRulers.prototype.__createRuler%3Dfunction(a)%7Bvar%20b%3Dthis.rlrs_height.toString()%2B%22px%22%2Ce%3Dthis.rlrs_width.toString()%2B%22px%22%2Cf%3DMath.floor(this.rlrs_width%2F2).toString()%2B%22px%22%2Cn%3D(Math.floor(screen.height%2F2)%2Bwindow.pageYOffset).toString()%2B%22px%22%2Cm%3Da.hash%3Fa.hash%3Athis.__newHash()%2Cd%3Ddocument.createElement(%22div%22)%3Bd.classList.add(%22_rlrs_ruler%22)%3Bvar%20c%3D%22background%3A%20rgba(255%2C255%2C255%2C0)%3B%22%3B%22v%22%3D%3D%3Da.type%3F(c%2B%3D%22background%3A%20-moz-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3Bbackground%3A%20-webkit-gradient(left%20top%2C%20right%20top%2C%20color-stop(0%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(33%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(34%25%2C%20rgba(255%2C30%2C0%2C1))%2C%20color-stop(66%25%2C%20rgba(240%2C46%2C22%2C1))%2C%20color-stop(67%25%2C%20rgba(240%2C47%2C23%2C0))%2C%20color-stop(100%25%2C%20rgba(231%2C56%2C39%2C0)))%3B%22%2Cc%2B%3D%22background%3A%20-webkit-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22background%3A%20-o-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22background%3A%20-ms-linear-gradient(left%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22background%3A%20linear-gradient(to%20right%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(%20startColorstr%3D'%23ffffff'%2C%20endColorstr%3D'%23e73827'%2C%20GradientType%3D1%20)%3B%22)%3A(c%2B%3D%22background%3A%20-moz-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22background%3A%20-webkit-gradient(left%20top%2C%20left%20bottom%2C%20color-stop(0%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(33%25%2C%20rgba(255%2C255%2C255%2C0))%2C%20color-stop(34%25%2C%20rgba(255%2C30%2C0%2C1))%2C%20color-stop(66%25%2C%20rgba(240%2C46%2C22%2C1))%2C%20color-stop(67%25%2C%20rgba(240%2C47%2C23%2C0))%2C%20color-stop(100%25%2C%20rgba(231%2C56%2C39%2C0)))%3B%22%2Cc%2B%3D%22background%3A%20-webkit-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22background%3A%20-o-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22background%3A%20-ms-linear-gradient(top%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22background%3A%20linear-gradient(to%20bottom%2C%20rgba(255%2C255%2C255%2C0)%200%25%2C%20rgba(255%2C255%2C255%2C0)%2033%25%2C%20rgba(255%2C30%2C0%2C1)%2034%25%2C%20rgba(240%2C46%2C22%2C1)%2066%25%2C%20rgba(240%2C47%2C23%2C0)%2067%25%2C%20rgba(231%2C56%2C39%2C0)%20100%25)%3B%22%2Cc%2B%3D%22filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(%20startColorstr%3D'%23ffffff'%2C%20endColorstr%3D'%23e73827'%2C%20GradientType%3D0%20)%3B%22)%3Bd.setAttribute(%22style%22%2Cc)%3Bd.style.position%3D%22absolute%22%3Bd.style.overflow%3D%22visible%22%3Bd.style.zIndex%3D9999%3Bd.setAttribute(%22data-type%22%2Ca.type)%3Bd.setAttribute(%22data-hash%22%2Cm)%3B%22v%22%3D%3D%3Da.type%3F(d.style.width%3D%223px%22%2Cd.style.height%3Db%2Cd.style.left%3Da.left%3Fa.left%3Af%2Cd.style.cursor%3D%22col-resize%22%2Cd.style.top%3D%220%22)%3A(d.style.width%3De%2Cd.style.height%3D%223px%22%2Cd.style.left%3D%220%22%2Cd.style.cursor%3D%22row-resize%22%2Cd.style.top%3Da.top%3Fa.top%3An)%3B!0%3D%3D%3Da.scope%26%26(d.innerHTML%3D%22v%22%3D%3D%3Da.type%3F'%3Cdiv%20class%3D%22_rlrs_scaleVert%22%3E%3C%2Fdiv%3E'%3A'%3Cdiv%20class%3D%22_rlrs_scaleHor%22%3E%3C%2Fdiv%3E')%3Bthis.rootSpace.appendChild(d)%3Bthis._activateListener(d)%3Ba.notStored%26%26(b%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7Brulers%3A%5B%5D%7D%2Cb.rulers.push(%7Bhash%3Am%2Ctype%3Aa.type%2Cleft%3Ad.style.left%2Ctop%3Ad.style.top%2Cscope%3Aa.scope%7D)%2ClocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(b)))%7D%3B_rlrsRulers.prototype._createRulerVertical%3Dfunction()%7Bthis.__createRuler(%7Btype%3A%22v%22%2CnotStored%3A!0%7D)%7D%3B_rlrsRulers.prototype._createRulerHorizontal%3Dfunction()%7Bthis.__createRuler(%7Btype%3A%22h%22%2CnotStored%3A!0%7D)%7D%3B_rlrsRulers.prototype._createScopedRulerVertical%3Dfunction()%7Bthis.__createRuler(%7Btype%3A%22v%22%2CnotStored%3A!0%2Cscope%3A!0%7D)%7D%3B_rlrsRulers.prototype._createScopedRulerHorizontal%3Dfunction()%7Bthis.__createRuler(%7Btype%3A%22h%22%2CnotStored%3A!0%2Cscope%3A!0%7D)%7D%3B_rlrsRulers.prototype.__resetRulers%3Dfunction()%7Bif(confirm(%22All%20rulers%20will%20be%20deleted.%20Do%20you%20agree%3F%22))%7Bfor(var%20a%3Ddocument.querySelectorAll(%22._rlrs_ruler%22)%2Cb%3Da.length-1%3B0%3C%3Db%3Bb--)this.rootSpace.removeChild(a%5Bb%5D)%3Bthis.__saveToStorage(%22rulers%22%2C%5B%5D)%3Breturn!0%7Dreturn!1%7D%3B_rlrsRulers.prototype._importRulers%3Dfunction()%7Bvar%20a%3Ddocument.querySelector(%22%23_rlrs_ioInput%22)%3Bif(a.value.length%26%26this.__resetRulers())%7Bvar%20b%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7Brulers%3A%5B%5D%7D%3Bb.rulers%3DJSON.parse(a.value)%3BlocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(b))%7D%7D%3B_rlrsRulers.prototype._exportRulers%3Dfunction()%7Bvar%20a%3Ddocument.querySelector(%22%23_rlrs_ioInput%22)%2Cb%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7Brulers%3A%5B%5D%7D%3Ba.value%3DJSON.stringify(b.rulers)%3Ba.focus()%3BsetTimeout(function()%7Ba.select()%7D%2C0)%7D%3B_rlrsRulers.prototype.__saveToStorage%3Dfunction(a%2Cb)%7Bvar%20e%3DJSON.parse(localStorage.getItem(%22_rlrs_%22))%7C%7C%7B%7D%3Be%5Ba%5D%3Db%3BlocalStorage.setItem(%22_rlrs_%22%2CJSON.stringify(e))%7D%3B_rlrsRulers.prototype._mouseMove%3Dfunction(a)%7Bthis._rlrs_movingRuler%26%26(%22v%22%3D%3D%3Dthis._rlrs_movingRuler.getAttribute(%22data-type%22)%3Fthis._rlrs_movingRuler.style.left%3Da.pageX%2B%22px%22%3Athis._rlrs_movingRuler.style.top%3Da.pageY%2B%22px%22)%7D%3B_rlrsRulers.prototype.__makeButton%3Dfunction()%7Bvar%20a%3Ddocument.createElement(%22span%22)%3Ba.style.display%3D%22inline-block%22%3Ba.style.margin%3D%222px%22%3Ba.style.padding%3D%223px%205px%22%3Ba.style.background%3D%22%23333%22%3Ba.style.color%3D%22%23efefef%22%3Ba.style.cursor%3D%22pointer%22%3Ba.style.borderRadius%3D%223px%22%3Ba.style.boxShadow%3D%220%200%202px%20%23ccc%22%3Breturn%20a%7D%3B_rlrsRulers.prototype.__makeSmallButton%3Dfunction()%7Bvar%20a%3Ddocument.createElement(%22span%22)%3Ba.style.display%3D%22inline-block%22%3Ba.style.margin%3D%222px%22%3Ba.style.padding%3D%222px%22%3Ba.style.background%3D%22%23333%22%3Ba.style.color%3D%22%23efefef%22%3Ba.style.cursor%3D%22pointer%22%3Ba.style.borderRadius%3D%222px%22%3Ba.style.boxShadow%3D%220%200%202px%20%23ccc%22%3Ba.style.width%3D%228px%22%3Ba.style.height%3D%228px%22%3Breturn%20a%7D%3B_rlrsRulers.prototype._buildControlPanel%3Dfunction()%7Bvar%20a%3Ddocument.createElement(%22div%22)%3Ba.setAttribute(%22id%22%2C%22_rlrs_panel%22)%3Ba.style.fontFamily%3D%22Verdana%2C%20Geneva%2C%20sans-serif%22%3Ba.style.fontSize%3D%2212px%22%3Ba.style.position%3D%22fixed%22%3Ba.style.background%3D%22rgba(200%2C200%2C200%2C0.8)%22%3Ba.style.border%3D%221px%20dashed%20%23999%22%3Ba.style.width%3D%22100px%22%3Ba.style.height%3D%22300px%22%3Ba.style.left%3D%222px%22%3Ba.style.top%3D%222px%22%3Ba.style.borderRadius%3D%224px%22%3Ba.style.zIndex%3D99999%3Ba.style.boxShadow%3D%220%200%204px%20%23ccc%22%3Ba.style.padding%3D%2210px%22%3Ba.style.textAlign%3D%22center%22%3Bvar%20b%3Ddocument.createElement(%22div%22)%3Bb.textContent%3D%22rulers.js%22%3Bb.style.color%3D%22%23555%22%3Bb.style.textAlign%3D%22center%22%3Bb.style.fontSize%3D%2210px%22%3Bb.style.borderBottom%3D%221px%20dotted%20%23777%22%3Bvar%20e%3Dthis.__makeButton()%3Be.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%20%7C%20%20%3C%2Fstrong%3E%22%3Be.addEventListener(%22click%22%2Cthis._createRulerVertical.bind(this))%3Bvar%20f%3Dthis.__makeButton()%3Bf.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%5Cu2014%20%3C%2Fstrong%3E%22%3Bf.addEventListener(%22click%22%2Cthis._createRulerHorizontal.bind(this))%3Bvar%20n%3Dthis.__makeButton()%3Bn.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%5Cu01c2%20%7C%20%20%3C%2Fstrong%3E%22%3Bn.addEventListener(%22click%22%2Cthis._createScopedRulerVertical.bind(this))%3Bvar%20m%3Dthis.__makeButton()%3Bm.innerHTML%3D%22%3Csmall%3Eadd%3C%2Fsmall%3E%3Cstrong%3E%20%5Cu01c2%20%5Cu2014%20%3C%2Fstrong%3E%22%3Bm.addEventListener(%22click%22%2Cthis._createScopedRulerHorizontal.bind(this))%3Bvar%20d%3Dthis.__makeButton()%3Bd.innerHTML%3D%22%3Csmall%3Eimport%3C%2Fsmall%3E%22%3Bd.addEventListener(%22click%22%2Cthis._importRulers.bind(this))%3Bvar%20c%3Dthis.__makeButton()%3Bc.innerHTML%3D%22%3Csmall%3Eexport%3C%2Fsmall%3E%22%3Bc.addEventListener(%22click%22%2Cthis._exportRulers.bind(this))%3Bvar%20p%3Ddocument.createElement(%22input%22)%3Bp.setAttribute(%22id%22%2C%22_rlrs_ioInput%22)%3Bp.style.display%3D%22block%22%3Bp.style.width%3D%22100%25%22%3Bp.style.padding%3D%220%22%3Bvar%20r%3Ddocument.createElement(%22hr%22)%2Cq%3Dthis.__makeButton()%3Bq.innerHTML%3D%22%3Cstrong%3Ereset%3C%2Fstrong%3E%22%3Bq.addEventListener(%22click%22%2Cthis.__resetRulers.bind(this))%3Bvar%20k%3Dthis.__makeSmallButton()%2Cg%3Dthis.__makeSmallButton()%2Cl%3Dthis.__makeSmallButton()%2Ch%3Dthis.__makeSmallButton()%3Bk.textContent%3D%22%5Cu02f9%22%3Bk.setAttribute(%22data-position%22%2C%22tl%22)%3Bk.style.position%3D%22absolute%22%3Bk.style.lineHeight%3D%2210px%22%3Bk.style.left%3D%222px%22%3Bk.style.top%3D%222px%22%3Bk.addEventListener(%22click%22%2Cthis._setPanelPosition)%3Bg.textContent%3D%22%5Cu02fa%22%3Bg.setAttribute(%22data-position%22%2C%22tr%22)%3Bg.style.position%3D%22absolute%22%3Bg.style.lineHeight%3D%2210px%22%3Bg.style.right%3D%222px%22%3Bg.style.top%3D%222px%22%3Bg.style.textAlign%3D%22right%22%3Bg.addEventListener(%22click%22%2Cthis._setPanelPosition)%3Bl.textContent%3D%22%5Cu02fb%22%3Bl.setAttribute(%22data-position%22%2C%22bl%22)%3Bl.style.position%3D%22absolute%22%3Bl.style.lineHeight%3D%220px%22%3Bl.style.left%3D%222px%22%3Bl.style.bottom%3D%222px%22%3Bl.addEventListener(%22click%22%2Cthis._setPanelPosition)%3Bh.textContent%3D%22%5Cu02fc%22%3Bh.setAttribute(%22data-position%22%2C%22br%22)%3Bh.style.position%3D%22absolute%22%3Bh.style.lineHeight%3D%220px%22%3Bh.style.right%3D%222px%22%3Bh.style.bottom%3D%222px%22%3Bh.style.textAlign%3D%22right%22%3Bh.addEventListener(%22click%22%2Cthis._setPanelPosition)%3Ba.appendChild(k)%3Ba.appendChild(g)%3Ba.appendChild(l)%3Ba.appendChild(h)%3Ba.appendChild(b)%3Ba.appendChild(e)%3Ba.appendChild(f)%3Ba.appendChild(n)%3Ba.appendChild(m)%3Ba.appendChild(q)%3Ba.appendChild(r)%3Ba.appendChild(d)%3Ba.appendChild(c)%3Ba.appendChild(p)%3Bthis.bodyRef.appendChild(a)%7D%3B_rlrsRulers.prototype._setPanelPosition%3Dfunction()%7Bvar%20a%3Ddocument.querySelector(%22%23_rlrs_panel%22)%2Cb%3Dthis.getAttribute(%22data-position%22)%3Ba.style.left%3D%22auto%22%3Ba.style.right%3D%22auto%22%3Ba.style.top%3D%22auto%22%3Ba.style.bottom%3D%22auto%22%3Bswitch(b)%7Bcase%20%22tl%22%3Aa.style.top%3D%222px%22%3Ba.style.left%3D%222px%22%3Bbreak%3Bcase%20%22tr%22%3Aa.style.top%3D%222px%22%3Ba.style.right%3D%222px%22%3Bbreak%3Bcase%20%22bl%22%3Aa.style.bottom%3D%222px%22%3Ba.style.left%3D%222px%22%3Bbreak%3Bcase%20%22br%22%3Aa.style.bottom%3D%222px%22%3Ba.style.right%3D%222px%22%3Bbreak%3Bdefault%3Aa.style.top%3D%222px%22%2Ca.style.left%3D%222px%22%7D%7D%3BsetTimeout(function()%7Bwindow.rlrs%3Dnew%20_rlrsRulers%7D%2C500)%3Bvoid%200%7D)()
```
