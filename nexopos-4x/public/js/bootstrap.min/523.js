"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[523],{523:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var n=r(381),o=r.n(n),u=r(1544),s=r(2744),i=r(9671),c=r(7389);const a={name:"ns-profit-report",data:function(){return{startDate:o()(),endDate:o()(),products:[]}},components:{nsDatepicker:u.Z,nsDateTimePicker:s.Z},computed:{totalQuantities:function(){return this.products.length>0?this.products.map((function(t){return t.quantity})).reduce((function(t,e){return t+e})):0},totalPurchasePrice:function(){return this.products.length>0?this.products.map((function(t){return t.total_purchase_price})).reduce((function(t,e){return t+e})):0},totalSalePrice:function(){return this.products.length>0?this.products.map((function(t){return t.total_price})).reduce((function(t,e){return t+e})):0},totalProfit:function(){return this.products.length>0?this.products.map((function(t){return t.total_price-t.total_purchase_price})).reduce((function(t,e){return t+e})):0},totalTax:function(){return this.products.length>0?this.products.map((function(t){return t.tax_value})).reduce((function(t,e){return t+e})):0}},methods:{printSaleReport:function(){this.$htmlToPaper("profit-report")},setStartDate:function(t){this.startDate=t.format()},loadReport:function(){var t=this;if(null===this.startDate||null===this.endDate)return i.kX.error((0,c.__)("Unable to proceed. Select a correct time range.")).subscribe();var e=o()(this.startDate);if(o()(this.endDate).isBefore(e))return i.kX.error((0,c.__)("Unable to proceed. The current time range is not valid.")).subscribe();i.ih.post("/api/nexopos/v4/reports/profit-report",{startDate:this.startDate,endDate:this.endDate}).subscribe({next:function(e){t.products=e},error:function(t){i.kX.error(t.message).subscribe()}})},setEndDate:function(t){console.log(t),this.endDate=t.format()}}},p=a;const l=(0,r(1900).Z)(p,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports}}]);