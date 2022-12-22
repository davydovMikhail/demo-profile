(function(){var t={624:function(t,e,n){"use strict";var a=n(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.IS_CONNECTED?e("div",[e("router-view")],1):e("div",{staticClass:"mx-auto"},[e("button",{staticClass:"btn btn-warning btn-lg",attrs:{type:"button"},on:{click:t.CONNECT_METAMASK}},[t._v("Connect Wallet")])]),e("main-window"),t.LOADER?e("main-loader"):t._e()],1)},s=[],r=n(3822),l=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"preloader"},[e("div",{staticClass:"preloader__loader"})])}],p=n(1001),u={},c=(0,p.Z)(u,l,o,!1,null,"053e226f",null),y=c.exports,d=function(){var t=this,e=t._self._c;return t.MESSAGE?e("div",{staticClass:"premodal",on:{click:function(e){return t.SET_MESSAGE("")}}},[e("div",{staticClass:"modal-dialog dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Message")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Закрыть"},on:{click:function(e){return t.SET_MESSAGE("")}}})]),e("div",{staticClass:"modal-body"},[e("p",[t._v(t._s(t.MESSAGE))])])])])]):t._e()},m=[],_={computed:{...(0,r.Se)(["MESSAGE"])},methods:{...(0,r.OI)(["SET_MESSAGE"])}},f=_,T=(0,p.Z)(f,d,m,!1,null,"c62353d2",null),b=T.exports,h={name:"App",components:{MainLoader:y,MainWindow:b},computed:{...(0,r.Se)(["IS_CONNECTED","LOADER","ORACLE_PROPOSALS"])},methods:{...(0,r.nv)(["CONNECT_METAMASK"])}},v=h,g=(0,p.Z)(v,i,s,!1,null,null,null),C=g.exports,M=n(2631),E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"home__container"},[e("div",{staticClass:"input-group mb-3"},[e("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Full Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleCreateProfile}},[t._v("Create New Profile Contract")])]),e("button",{staticClass:"btn btn-outline-warning",staticStyle:{"margin-top":"20px"},attrs:{type:"button"},on:{click:t.handleUpdate}},[t._v("Update cards")]),e("div",{staticClass:"home__title"},[t._v(" My Profiles: ")]),e("div",{staticClass:"home__container"},t._l(t.PROFILES_ARRAY,(function(t,n){return e("profile-address",{key:n,attrs:{address:t}})})),1),e("div",{staticClass:"home__title"},[t._v(" Transmitted Profiles: ")]),e("div",{staticClass:"home__container"},t._l(t.TRANSMITTED_PROFILES,(function(t,n){return e("transmitted-profile",{key:n,attrs:{address:t}})})),1),e("div",{staticClass:"home__title"},[t._v(" AcceptedProfiles: ")]),e("div",{staticClass:"home__container"},t._l(t.ACCEPTED_PROFILES,(function(t,n){return e("accepted-profile",{key:n,attrs:{address:t}})})),1)])},A=[],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body address"},[e("div",{staticClass:"address__text",on:{click:t.handleToProfile}},[t._v(" "+t._s(t.address)+" ")]),e("div",{staticClass:"address__buttons"},[e("button",{staticClass:"btn btn-secondary",staticStyle:{"margin-right":"10px"},attrs:{type:"button"},on:{click:function(e){return t.openModal()}}},[t._v("Transfer Ownership")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.handleDelete()}}},[t._v("Delete")])])]),t.isOpen?e("div",{staticClass:"premodal"},[e("div",{staticClass:"modal-dialog dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Transfer Ownership")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Закрыть"},on:{click:function(e){return t.closeModal()}}})]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"mb-3 row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"staticEmail"}},[t._v("Profile Address:")]),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"staticEmail"},domProps:{value:t.address}})])]),e("div",{staticClass:"mb-3 row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"input1"}},[t._v("New Owner Address:")]),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newOwner,expression:"newOwner"}],staticClass:"form-control",attrs:{type:"text",id:"input1"},domProps:{value:t.newOwner},on:{input:function(e){e.target.composing||(t.newOwner=e.target.value)}}})])])]),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.handleTransfer()}}},[t._v("Transfer")])])])]):t._e()])},S=[],P=(n(7658),{data(){return{newOwner:"",isOpen:!1}},props:{address:String},methods:{...(0,r.nv)(["SEND_DATA"]),handleToProfile(){ft.push(`profile-address/${this.address}`)},async handleDelete(){const t={method:"deleteProfile",params:[this.address]};await this.SEND_DATA(t),this.isOpen=!1},async handleTransfer(){const t={method:"transferProfileOwnership",params:[this.newOwner,this.address]};await this.SEND_DATA(t),this.isOpen=!1},openModal(){this.isOpen=!0},closeModal(){this.isOpen=!1}}}),O=P,D=(0,p.Z)(O,w,S,!1,null,"65908676",null),R=D.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body address"},[e("div",{staticClass:"address__text"},[t._v(" "+t._s(t.address)+" ")]),e("div",{staticClass:"address__buttons"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.handleTransfer()}}},[t._v("Cancel Transfer")])])])])},N=[],L={props:{address:String},methods:{...(0,r.nv)(["SEND_DATA"]),async handleTransfer(){const t={method:"cancelTransferProfileOwnership",params:[this.address]};await this.SEND_DATA(t)}}},F=L,x=(0,p.Z)(F,I,N,!1,null,"555f3933",null),k=x.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body address"},[e("div",{staticClass:"address__text"},[t._v(" "+t._s(t.address)+" ")]),e("div",{staticClass:"address__buttons"},[e("button",{staticClass:"btn btn-secondary",staticStyle:{"margin-right":"10px"},attrs:{type:"button"},on:{click:function(e){return t.handleAccept()}}},[t._v("Accept Ownership")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.handleCancel()}}},[t._v("Cancel")])])])])},B=[],G={props:{address:String},methods:{...(0,r.nv)(["SEND_DATA"]),async handleCancel(){const t={method:"cancelTransferProfileOwnership",params:[this.address]};await this.SEND_DATA(t)},async handleAccept(){const t={method:"acceptProfileOwnership",params:[this.address]};await this.SEND_DATA(t)}}},Y=G,Z=(0,p.Z)(Y,U,B,!1,null,"90e060b6",null),K=Z.exports,j={name:"HelloWorld",components:{ProfileAddress:R,TransmittedProfile:k,AcceptedProfile:K},created(){this.GET_PROFILES_ARRAY(),this.GET_TRANSMITTED_PROFILES(),this.GET_ACCEPTED_PROFILES()},data(){return{fullName:""}},methods:{...(0,r.nv)(["SEND_DATA","GET_PROFILES_ARRAY","GET_TRANSMITTED_PROFILES","GET_ACCEPTED_PROFILES"]),handleCreateProfile(){if(this.fullName){const t={method:"createNewProfileContract",params:[this.fullName]};this.SEND_DATA(t)}else this.$vToastify.info("Fill full name","Validation warning")},handleUpdate(){this.GET_PROFILES_ARRAY(),this.GET_TRANSMITTED_PROFILES(),this.GET_ACCEPTED_PROFILES()}},computed:{...(0,r.Se)(["PROFILES_ARRAY","TRANSMITTED_PROFILES","ACCEPTED_PROFILES"])}},W=j,$=(0,p.Z)(W,E,A,!1,null,"512846ce",null),q=$.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"home__container"},[e("div",{staticClass:"home__title"},[t._v(" Address Profile: "+t._s(t.addressProfile)+" ")]),e("div",{staticClass:"home__title"},[t._v(" Address Wallet: "+t._s(t.addressWallet)+" ")]),e("div",{staticClass:"home__title"},[t._v(" Full Name: "+t._s(t.fullName)+" ")]),e("div",{staticClass:"home__title"},[t._v(" KYC: "+t._s(t.KYC)+" ")]),e("br"),e("div",{staticClass:"home__title"},[t._v(" Confirmations: ")]),e("div",{staticClass:"home__cards"},t._l(t.confirmations,(function(n,a){return e("div",{key:a,staticClass:"card",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Metric Name: "+t._s(n.name))]),e("p",{staticClass:"cursor-pointer card-text",on:{click:function(e){return t.handleToOracle(n.oracle)}}},[t._v("Oracle address: "+t._s(n.oracle))]),e("p",{staticClass:"card-text"},[t._v("Metric label: "+t._s(n.label))]),e("p",{staticClass:"card-text"},[t._v("Oracle label: "+t._s(n.oracleLabel))])])])})),0),e("div",{staticClass:"home__title"},[t._v(" Metric Names: ")]),e("div",{staticClass:"home__cards"},t._l(t.nameMetrics,(function(n,a){return e("div",{key:a,staticClass:"card",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Metric Name: "+t._s(n.name))]),e("p",{staticClass:"cursor-pointer card-text",on:{click:function(e){return t.handleToOracle(n.oracle)}}},[t._v("Oracle address: "+t._s(n.oracle))]),e("p",{staticClass:"card-text"},[t._v("Metric label: "+t._s(n.label))]),e("p",{staticClass:"card-text"},[t._v("Oracle label: "+t._s(n.oracleLabel))])])])})),0),e("br"),e("br"),e("div",{staticClass:"home__title"},[t._v(" Metrics: ")]),e("div",{staticClass:"home__cards"},t._l(t.metrics,(function(n,a){return e("div",{key:a,staticClass:"card",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(n.label))]),e("p",{staticClass:"card-text"},[t._v(t._s(n.result))])])])})),0)]),e("button",{staticClass:"back btn btn-warning",attrs:{type:"button"},on:{click:t.handleMain}},[t._v("MAIN")])])},z=[],H=n(6477),Q=n(425),X=n(4643);const{ethers:J}=n(2714);function tt(t){return J.utils.id(t)}const et={1:"getUint",2:"getInt",3:"getFloatUint",4:"getFloatInt",5:"getAddress",6:"getBool",7:"getString",8:"getDate",9:"getBytes32"},nt={1:"Uint",2:"Int",3:"FloatUint",4:"FloatInt",5:"Address",6:"Bool",7:"String",8:"Date",9:"Bytes32",10:"KYC"};function at(t,e){switch(e){case"3":case"4":return t.value/10**t.decimal;case"8":return`${t.day}:${t.month}:${t.year} ${t.hour}:${t.minute}`;default:return t}}var it={name:"ProfileAddress",async created(){this.addressProfile=this.$route.params.address,this.addressWallet=await(0,H.fetchContractData)(Q.abiProfileContract,this.addressProfile,"addressWallet",[]),this.fullName=await(0,H.fetchContractData)(Q.abiProfileContract,this.addressProfile,"fullName",[]),this.KYC=await(0,H.fetchContractData)(Q.abiProfileContract,this.addressProfile,"KYC",[]);const t=await(0,H.fetchContractData)(Q.abiProfileContract,this.addressProfile,"getLengthConfirmations",[]),e=await(0,H.fetchContractData)(Q.abiProfileContract,this.addressProfile,"getLengthMetricNames",[]);if(Number(t)){let e=await(0,H.fetchContractData)(Q.abiProfileContract,this.addressProfile,"getSliceConfirmations",[0,t]);for(let t=0;t<e.length;t++){const n=tt(e[t]),a=await(0,H.fetchContractData)(Q.abiMaster,X.ADDR_MASTER,"getMetricaInfo",[n]),i=await(0,H.fetchContractData)(Q.abiMaster,X.ADDR_MASTER,"getOracleInfo",[a.oracle]);let s={name:a.name,oracle:a.oracle,label:a.label,oracleLabel:i["1"]};this.confirmations.push(s)}}if(Number(e)){const t=await(0,H.fetchContractData)(Q.abiProfileContract,this.addressProfile,"getSliceMetricNames",[0,e]);for(let e=0;e<t.length;e++){const n=tt(t[e]),a=await(0,H.fetchContractData)(Q.abiMaster,X.ADDR_MASTER,"getMetricaInfo",[n]),i=await(0,H.fetchContractData)(Q.abiMaster,X.ADDR_MASTER,"getOracleInfo",[a.oracle]);let s={name:a.name,oracle:a.oracle,label:a.label,oracleLabel:i["1"]};this.nameMetrics.push(s);const r=await(0,H.fetchContractData)(Q.abiDataRouter,X.ADDR_DATA_ROUTER,"getTypeMetricByName",[t[e]]),l=et[r],o=await(0,H.fetchContractData)(Q.abiDataRouter,X.ADDR_DATA_ROUTER,l,[this.addressProfile,t[e]]),p=at(o,r);this.metrics.push({result:p,label:a.label})}}},data(){return{addressProfile:"",fullName:"",addressWallet:"",KYC:"",confirmations:[],nameMetrics:[],metrics:[]}},methods:{handleMain(){ft.push("/")},handleToOracle(t){ft.push(`/oracle-address/${t}`)}}},st=it,rt=(0,p.Z)(st,V,z,!1,null,"51799ca2",null),lt=rt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"home__container"},[e("div",{staticClass:"home__title"},[t._v(" Address Oracle: "+t._s(t.addressOracle)+" ")]),e("div",{staticClass:"home__title"},[t._v(" Oracle Label: "+t._s(t.oracleLabel)+" ")]),e("div",{staticClass:"home__title"},[t._v(" Karma: "+t._s(t.karma)+" ")]),e("div",{staticClass:"home__title"},[t._v(" BAN: "+t._s(t.isBan)+" ")]),e("div",{staticClass:"home__title"},[t._v(" All Metrics: ")]),e("div",{staticClass:"home__cards"},t._l(t.metrics,(function(n,a){return e("div",{key:a,staticClass:"card",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Metric Name: "+t._s(n.name))]),e("p",{staticClass:"card-text"},[t._v("Metric label: "+t._s(n.label))]),e("p",{staticClass:"card-text"},[t._v("Metric type: "+t._s(n.type))])])])})),0)]),e("button",{staticClass:"back btn btn-warning",attrs:{type:"button"},on:{click:t.handleMain}},[t._v("MAIN")])])},pt=[],ut={name:"OracleAddress",async created(){this.addressOracle=this.$route.params.address;const t=await(0,H.fetchContractData)(Q.abiMaster,X.ADDR_MASTER,"getOracleInfo",[this.addressOracle]),e=t[0];if(this.oracleLabel=t[1],this.karma=t[2],this.isBan=t[3],e.length)for(let n=0;n<e.length;n++){const t=tt(e[n]),a=await(0,H.fetchContractData)(Q.abiMaster,X.ADDR_MASTER,"getMetricaInfo",[t]),i=nt[a[1]];let s={name:a.name,label:a.label,type:i};this.metrics.push(s)}},data(){return{addressOracle:"",oracleLabel:"",karma:"",isBan:"",metrics:[]}},methods:{handleMain(){ft.push("/")}}},ct=ut,yt=(0,p.Z)(ct,ot,pt,!1,null,"585dfe51",null),dt=yt.exports;a.ZP.use(M.ZP);const mt=[{path:"/",name:"Main",component:q},{path:"/profile-address/:address",name:"ProfileAddress",component:lt},{path:"/oracle-address/:address",name:"OracleAddress",component:dt}],_t=new M.ZP({mode:"history",base:"/demo-profile/",routes:mt});var ft=_t;a.ZP.use(r.ZP);var Tt=new r.ZP.Store({state:{loader:!1,isConnected:!1,message:"",profilesArray:[],transmittedProfiles:[],acceptedProfiles:[]},getters:{IS_CONNECTED:t=>t.isConnected,MESSAGE:t=>t.message,LOADER:t=>t.loader,PROFILES_ARRAY:t=>t.profilesArray,TRANSMITTED_PROFILES:t=>t.transmittedProfiles,ACCEPTED_PROFILES:t=>t.acceptedProfiles},mutations:{SET_CONNECT_STATUS:(t,e)=>t.isConnected=e,SET_LOADER_STATUS:(t,e)=>t.loader=e,SET_MESSAGE:(t,e)=>t.message=e,SET_PROFILES_ARRAY:(t,e)=>t.profilesArray=e,SET_TRANSMITTED_PROFILES:(t,e)=>t.transmittedProfiles=e,SET_ACCEPTED_PROFILES:(t,e)=>t.acceptedProfiles=e},actions:{async CONNECT_METAMASK({commit:t}){t("SET_LOADER_STATUS",!0);const e=await(0,H.connect)();e&&t("SET_CONNECT_STATUS",!0),t("SET_LOADER_STATUS",!1)},async SEND_DATA({commit:t},e){t("SET_LOADER_STATUS",!0),t("SET_MESSAGE","");const n=await(0,H.checkAddress)();if(n){const n=await(0,H.sendDataToContract)(e.method,e.params);n.hash?t("SET_MESSAGE",`https://goerli.etherscan.io/tx/${n.hash}`):n.error.message&&t("SET_MESSAGE",n.error.message)}else t("SET_CONNECT_STATUS",!1);t("SET_LOADER_STATUS",!1)},async GET_PROFILES_ARRAY({commit:t}){t("SET_PROFILES_ARRAY",[]);const e=await(0,H.getFirstAddress)(),n=await(0,H.fetchContractData)(Q.abiProfileRouter,X.ADDR_PROFILE_ROUTER,"getLengthProfilesArray",[e]),a=await(0,H.fetchContractData)(Q.abiProfileRouter,X.ADDR_PROFILE_ROUTER,"getSliceProfilesArray",[e,0,n]),i=a;t("SET_PROFILES_ARRAY",i)},async GET_TRANSMITTED_PROFILES({commit:t}){t("SET_TRANSMITTED_PROFILES",[]);const e=await(0,H.getFirstAddress)(),n=await(0,H.fetchContractData)(Q.abiProfileRouter,X.ADDR_PROFILE_ROUTER,"getTransmittedProfiles",[e]),a=n;t("SET_TRANSMITTED_PROFILES",a)},async GET_ACCEPTED_PROFILES({commit:t}){t("SET_ACCEPTED_PROFILES",[]);const e=await(0,H.getFirstAddress)(),n=await(0,H.fetchContractData)(Q.abiProfileRouter,X.ADDR_PROFILE_ROUTER,"getAcceptedProfiles",[e]),a=n;t("SET_ACCEPTED_PROFILES",a)}},modules:{}}),bt=n(461),ht=n.n(bt);a.ZP.config.productionTip=!1,a.ZP.use(ht()),new a.ZP({router:ft,store:Tt,render:t=>t(C)}).$mount("#app")},425:function(t,e,n){"use strict";n.r(e),n.d(e,{abiDataRouter:function(){return i},abiMaster:function(){return s},abiProfileContract:function(){return a},abiProfileRouter:function(){return r}});const a=[{inputs:[{internalType:"address",name:"_wallet",type:"address"},{internalType:"address",name:"_master",type:"address"},{internalType:"address",name:"_router",type:"address"},{internalType:"string",name:"_name",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"KYC",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"acceptProfileOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"addressWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_metricName",type:"string"}],name:"approveKYC",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cancelTransferProfileOwnership",outputs:[{internalType:"address",name:"newAddressWallet",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"dataBytes32",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"dataStrings",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"deleteProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"fullName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"}],name:"getBytes32",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLengthConfirmations",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLengthMetricNames",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_start",type:"uint256"},{internalType:"uint256",name:"_end",type:"uint256"}],name:"getSliceConfirmations",outputs:[{internalType:"string[]",name:"slice",type:"string[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_start",type:"uint256"},{internalType:"uint256",name:"_end",type:"uint256"}],name:"getSliceMetricNames",outputs:[{internalType:"string[]",name:"slice",type:"string[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"}],name:"getString",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"kycOracles",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"master",outputs:[{internalType:"contract IMaster",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string[]",name:"_metricNames",type:"string[]"}],name:"registerMetricIds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"registeredMetricIds",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"bytes32",name:"_data",type:"bytes32"}],name:"setBytes32",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"string",name:"_data",type:"string"}],name:"setString",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newAddress",type:"address"}],name:"transferProfileOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],i=[{inputs:[{internalType:"address",name:"_master",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getAddress",outputs:[{internalType:"address",name:"value",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getBool",outputs:[{internalType:"bool",name:"value",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getBytes32",outputs:[{internalType:"bytes32",name:"value",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getDate",outputs:[{components:[{internalType:"uint16",name:"year",type:"uint16"},{internalType:"uint8",name:"month",type:"uint8"},{internalType:"uint8",name:"day",type:"uint8"},{internalType:"uint8",name:"hour",type:"uint8"},{internalType:"uint8",name:"minute",type:"uint8"},{internalType:"uint8",name:"second",type:"uint8"},{internalType:"uint200",name:"timestamp",type:"uint200"}],internalType:"struct DataRouter.Date",name:"object",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getFloatInt",outputs:[{components:[{internalType:"int240",name:"value",type:"int240"},{internalType:"uint16",name:"decimal",type:"uint16"}],internalType:"struct DataRouter.FloatInt",name:"object",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getFloatUint",outputs:[{components:[{internalType:"uint240",name:"value",type:"uint240"},{internalType:"uint16",name:"decimal",type:"uint16"}],internalType:"struct DataRouter.FloatUint",name:"object",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getInt",outputs:[{internalType:"int256",name:"value",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getString",outputs:[{internalType:"string",name:"value",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_metricName",type:"string"}],name:"getTypeMetricByName",outputs:[{internalType:"enum IMaster.TypeMetric",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"string",name:"_metricName",type:"string"}],name:"getUint",outputs:[{internalType:"uint256",name:"value",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"master",outputs:[{internalType:"contract IMaster",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"address",name:"_value",type:"address"}],name:"setAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"bool",name:"_value",type:"bool"}],name:"setBool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"bytes32",name:"_value",type:"bytes32"}],name:"setBytes32",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{components:[{internalType:"uint16",name:"year",type:"uint16"},{internalType:"uint8",name:"month",type:"uint8"},{internalType:"uint8",name:"day",type:"uint8"},{internalType:"uint8",name:"hour",type:"uint8"},{internalType:"uint8",name:"minute",type:"uint8"},{internalType:"uint8",name:"second",type:"uint8"},{internalType:"uint200",name:"timestamp",type:"uint200"}],internalType:"struct DataRouter.Date",name:"_object",type:"tuple"}],name:"setDate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{components:[{internalType:"int240",name:"value",type:"int240"},{internalType:"uint16",name:"decimal",type:"uint16"}],internalType:"struct DataRouter.FloatInt",name:"_object",type:"tuple"}],name:"setFloatInt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{components:[{internalType:"uint240",name:"value",type:"uint240"},{internalType:"uint16",name:"decimal",type:"uint16"}],internalType:"struct DataRouter.FloatUint",name:"_object",type:"tuple"}],name:"setFloatUint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"int256",name:"_value",type:"int256"}],name:"setInt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"string",name:"_value",type:"string"}],name:"setString",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"bytes32",name:"_metricId",type:"bytes32"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"setUint",outputs:[],stateMutability:"nonpayable",type:"function"}],s=[{inputs:[{internalType:"address[]",name:"_initMembers",type:"address[]"},{internalType:"uint256",name:"_proposalDuration",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"MemberProposals",outputs:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"address",name:"member",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"OracleProposals",outputs:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"string",name:"description",type:"string"},{internalType:"address",name:"oracle",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"becomeMember",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string[]",name:"_metricNames",type:"string[]"},{internalType:"enum IMaster.TypeMetric[]",name:"_metricTypes",type:"uint8[]"},{internalType:"string",name:"_description",type:"string"}],name:"becomeOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"community",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"finishMemberVoiting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"finishOracleVoiting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getLengthMemberProposals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLengthOracleProposals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMemberProposals",outputs:[{components:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"address",name:"member",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],internalType:"struct IMaster.MemberProposal[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"getMetricNamesByProposalId",outputs:[{internalType:"string[]",name:"",type:"string[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"}],name:"getMetricaInfo",outputs:[{components:[{internalType:"address",name:"oracle",type:"address"},{internalType:"enum IMaster.TypeMetric",name:"typeMetric",type:"uint8"},{internalType:"string",name:"label",type:"string"},{internalType:"string",name:"name",type:"string"}],internalType:"struct IMaster.MetricInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"}],name:"getOracleByMetricId",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_oracle",type:"address"}],name:"getOracleInfo",outputs:[{internalType:"string[]",name:"",type:"string[]"},{internalType:"string",name:"",type:"string"},{internalType:"int256",name:"",type:"int256"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOracleProposals",outputs:[{components:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"string[]",name:"metricNames",type:"string[]"},{internalType:"enum IMaster.TypeMetric[]",name:"metricTypes",type:"uint8[]"},{internalType:"string",name:"description",type:"string"},{internalType:"address",name:"oracle",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],internalType:"struct IMaster.OracleProposal[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"memberQuantity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"metrics",outputs:[{internalType:"address",name:"oracle",type:"address"},{internalType:"enum IMaster.TypeMetric",name:"typeMetric",type:"uint8"},{internalType:"string",name:"label",type:"string"},{internalType:"string",name:"name",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"oracles",outputs:[{internalType:"string",name:"label",type:"string"},{internalType:"int256",name:"ResultKarma",type:"int256"},{internalType:"bool",name:"ban",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"proposalDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string[]",name:"_metricNames",type:"string[]"},{internalType:"string[]",name:"_metricLabels",type:"string[]"}],name:"setMetricLabels",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_oracle",type:"address"},{internalType:"enum IMaster.KarmaState",name:"_state",type:"uint8"}],name:"setOracleKarma",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_label",type:"string"}],name:"setOracleLabel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"voteForMember",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"voteForOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"},{internalType:"address",name:"",type:"address"}],name:"votes",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],r=[{inputs:[{internalType:"address",name:"_masterAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"_profile",type:"address"}],name:"acceptProfileOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"}],name:"cancelTransferProfileOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_fullName",type:"string"}],name:"createNewProfileContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"}],name:"deleteProfile",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getAcceptedProfiles",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getLengthProfilesArray",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_start",type:"uint256"},{internalType:"uint256",name:"_end",type:"uint256"}],name:"getSliceProfilesArray",outputs:[{internalType:"address[]",name:"slice",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getTransmittedProfiles",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_profile",type:"address"},{internalType:"address",name:"_wallet",type:"address"}],name:"isProfileBelongWallet",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"},{internalType:"address",name:"_profile",type:"address"}],name:"transferProfileOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},4643:function(t,e,n){"use strict";n.r(e),n.d(e,{ADDR_DATA_ROUTER:function(){return i},ADDR_MASTER:function(){return a},ADDR_PROFILE_ROUTER:function(){return s}});const a="0x9bD291885f078b6DB5f9030537Af3328591caB64",i="0xf6613eee4A177c09c6Fb8Fe2bf68bf9c86DFB86a",s="0x5203f995B58a41587BDccB87a89C9167C9005062"},6477:function(t,e,n){const{ethers:a}=n(2714),{abiProfileRouter:i}=n(425),{ADDR_PROFILE_ROUTER:s}=n(4643),r=n(7629),l=n(1832);r.config({EXPONENTIAL_AT:60});const o="https://rpc.ankr.com/eth_goerli",p={method:"wallet_switchEthereumChain",params:[{chainId:"0x5"}]};let u,c,y;async function d(){if("undefined"===typeof window.ethereum)return console.log("Please install MetaMask"),!1;{const{ethereum:e}=window;try{await e.request({method:"eth_requestAccounts"}),u=new a.providers.Web3Provider(window.ethereum);const{chainId:t}=await u.getNetwork();return 5!==t&&await e.request(p),!0}catch(t){return console.log(t),!1}}}const m=()=>{try{const t=new l.providers.HttpProvider(o);return c=new l(t),!0}catch(t){return!1}};async function _(){const t=await window.ethereum.request({method:"eth_accounts"});return t.length}async function f(){const t=await window.ethereum.request({method:"eth_accounts"});return t[0]}async function T(){if(!y){const t=u.getSigner();y=new a.Contract(s,i,t)}}const b=async(t,e,n,a)=>{c||m();try{const i=new c.eth.Contract(t,e);return await i.methods[n].apply(this,a).call()}catch(i){return console.log(i),""}},h=async(t,e)=>{await T();try{const n=await y[t].apply(this,e);return n}catch(n){return console.log(n),n}};t.exports={connect:d,connectNode:m,checkAddress:_,fetchContractData:b,sendDataToContract:h,getFirstAddress:f}},6601:function(){}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,a,i,s){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],s=t[u][2];for(var l=!0,o=0;o<a.length;o++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[o])}))?a.splice(o--,1):(l=!1,s<r&&(r=s));if(l){t.splice(u--,1);var p=i();void 0!==p&&(e=p)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,r=a[0],l=a[1],o=a[2],p=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(o)var u=o(n)}for(e&&e(a);p<r.length;p++)s=r[p],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkprofile_management"]=self["webpackChunkprofile_management"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(624)}));a=n.O(a)})();
//# sourceMappingURL=app.9337b1ff.js.map