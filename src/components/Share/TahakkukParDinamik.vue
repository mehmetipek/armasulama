<template>
<div >
  <div class="col-md-12">
    <!-- @keyup.f2="save()" -->
    <table class="table table-bordered" >
      <thead>
        <tr>
          <th scope="col">Dönem</th>
          <th scope="col" v-for="(r,index) in tableHeaders" v-bind:key="index">{{r}}</th>
          <!-- <th scope="col">İşlemler</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r,index_row) in tableBody" v-bind:key="index_row">
          <td style="font-weight:bold;text-align:center;">{{++index_row}}</td>

          <td v-for="(f,index) in fields" v-bind:key="index">
            <input
              v-if="f.type=='text'"
              class="table-input"
              type="text"
              v-model="r[f.name]"
              @change="thisChange(r)"
              @keyup.up="focus(index_row,index,'up')"
              @keyup.down="focus(index_row,index,'down')"
              @keyup.left="focus(index_row,index,'left')"
              @keyup.right="focus(index_row,index,'right')"
              @keyup.enter="focus(index_row,index,'enter')"
              ref="inputs"
            />
            <!-- <textarea
              v-else-if="f.type === 'textarea'"
              v-model="r[f.name]"
              @change="thisChange(r)"
              @keyup.up="focus(index_row,index,'up')"
              @keyup.down="focus(index_row,index,'down')"
              @keyup.left="focus(index_row,index,'left')"
              @keyup.right="focus(index_row,index,'right')"
              @keyup.enter="focus(index_row,index,'enter')"
              ref="inputs"
            ></textarea>

            <div class="form-check" v-else-if="f.type === 'check'"
            >
              <input class="form-check-input" type="checkbox" v-model="r[f.name]" 
                @change="thisChange(r)"
              @keyup.up="focus(index_row,index,'up')"
              @keyup.down="focus(index_row,index,'down')"
              @keyup.left="focus(index_row,index,'left')"
              @keyup.right="focus(index_row,index,'right')"
              @keyup.enter="focus(index_row,index,'enter')"
              ref="inputs"/>
              <label class="form-check-label" for="defaultCheck1">{{f.label}}</label>
            </div> -->
            <div style="    margin-bottom: -11px;" class="form-group col-md-12" v-else-if="f.type === 'select'">
              <!-- <label for="inputState">State</label> -->
              <select id="inputState" class="form-control" v-model="r[f.name]"
                @change="thisChange(r)"
              @keyup.up="focus(index_row,index,'up')"
              @keyup.down="focus(index_row,index,'down')"
              @keyup.left="focus(index_row,index,'left')"
              @keyup.right="focus(index_row,index,'right')"
              @keyup.enter="focus(index_row,index,'enter')"
              ref="inputs">
                <option v-for="(o,o_index) in f.options" :key="o_index" :value="o.kod">{{o.ulke_adi}}</option>
              </select>
            </div>
          </td>
          <!-- <td> -->
            <!-- <button class="btn btn-danger" @click="remove(r)">Sil</button>
                 <button class="btn btn-info" type="button" @click="add">Ekle</button> -->
          <!-- </td> -->
        </tr>
      </tbody>
    </table>
    
    <!-- <button @click="check">Kontrol</button>
     <input type="text" ref="email" /> -->
  </div>
  </div>
</template>
<script>
export default {
  props: {
    tableBody: { type: Array },
    tableHeaders: { type: Array },
    fields: { type: Array }
  },
  data() {
    return {
      magic_flag: false,
      inputCount: 0,
    };
  },
  created(){
  },
  methods: {
    
    add: function() {
      const newData = {};
      // newData.status = "added";
      // newData.isShow = false;
      this.tableBody.push(newData);
    },
    add_and_focus: function(rowIndex, cellIndex, direction) {
      const newData = {};
      // newData.status = "added";
      // newData.isShow = false;
      this.tableBody.push(newData);

      this.focus(++rowIndex, cellIndex, direction);
    },
    thisChange: function(item) {
      // item.isChanged = true;
    },
    check() {
      const newData = {};
      // newData.status = "added";
      // newData.isShow = false;
      this.tableBody.push(newData);
      this.tableBody.pop(newData);
    },
    remove(item) {
      for (var i = 0; i < this.tableBody.length; i++) {
        if (this.tableBody[i] === item) {
          this.tableBody.splice(i, 1);
        }
      }
    },
    getFieldsSize() {
      return this.fields.length;
    },
    focus(rowIndex, cellIndex, direction) {
      //rowIndex 1 fazla geliyor.. O yüzden azaltılıyor
      rowIndex--;

      var fielSize = this.getFieldsSize();
      // console.log(
      //   "rowIndex:",
      //   rowIndex,
      //   "\ncellIndex:",
      //   cellIndex,
      //   "\ndirection:",
      //   direction,
      //   "\nFieldSize:",
      //   fielSize
      // );
      var selectInput;

      switch (direction) {
        case "up":
          selectInput = rowIndex * fielSize + cellIndex;
          if (selectInput < fielSize) return;
          this.$refs.inputs[selectInput - fielSize].focus();
          break;
        case "down":
          selectInput = rowIndex * fielSize + cellIndex;
          if (selectInput + fielSize > this.tableBody.length * fielSize) return;
          this.$refs.inputs[selectInput + fielSize].focus();
          break;
        case "left":
          selectInput = rowIndex * fielSize + cellIndex;
          if (selectInput == 0) return;
          this.$refs.inputs[selectInput - 1].focus();
          this.$refs.inputs[selectInput - 1].select();
          break;
        case "right":
          selectInput = rowIndex * fielSize + cellIndex;
          if (selectInput + 1 == this.tableBody.length * fielSize) return;
          this.$refs.inputs[selectInput + 1].focus();
          this.$refs.inputs[selectInput + 1].select();
          break;
        case "enter":
          selectInput = rowIndex * fielSize + cellIndex;
          if (selectInput + 1 == this.tableBody.length * fielSize) {
            this.check();
            // return this.add_and_focus(rowIndex, cellIndex, direction);
          } else {
            this.$refs.inputs[selectInput + 1].focus();
            this.$refs.inputs[selectInput + 1].select();
          }
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped>
td {
  padding: 0;
}
.table-input {
  font-size: 16px;
  width: 100%;
  height: 70%;
  padding: 5px;
  border: none;
}
</style>