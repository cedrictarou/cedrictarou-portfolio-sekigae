<template>
  <div class="text-center mt-5">
    <div class="row">
      <div
        class="form-group col-sm"
        v-b-popover.hover.top="'人数を入力してください'"
      >
        <label for="studentsNum">生徒の数:</label>
        <input type="number" name="studentsNum" v-model.number="studentsNum" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <button class="btn btn-primary mb-2 mr-2 ml-2 w-150" @click="setup">
          {{ btn }}
        </button>
        <button class="btn btn-primary mb-2" @click="doClear">
          クリア
        </button>
      </div>
    </div>

    <div>
      <draggable v-model="students" element="ul" class="mt-3">
        <template v-for="student in students">
          <li
            @click="changeGender(student)"
            :class="student.gender"
            :key="student.id"
            v-b-popover.hover.top="'クリックして性別を変える'"
          >
            <template v-if="student.gender === 'boy'">
              <div>
                {{ isBoysArray(student.idx) }}
              </div>
            </template>
            <template v-else>
              <div>
                {{ isGirlsArray(student.idx) }}
              </div>
            </template>
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data: function() {
    return {
      btn: "セットアップ",
      students: [],
      studentsNum: 35,
      boysArray: [],
      girlsArray: []
    };
  },
  watch: {
    studentsNum: function() {
      this.setup();
      this.btn = "シャッフル";
    }
  },
  methods: {
    setup: function() {
      //1.studentsの配列の要素数とstudentsNumが違うなら要素を作成
      if (this.students.length !== this.studentsNum) {
        this.doClear();
        this.genderateStudents();
        // students配列から男女それぞれの配列を作る
        this.addBoys();
        this.addGirls();
        //boysArraymまたはgirldArrayのidxをstudentに渡す処理
        this.makingIdx();
      } else {
        //2.studentsの配列の要素数とstudentsNumが同じならシャッフルする
        this.addBoys();
        this.addGirls();
        //boysArraymまたはgirldArrayのidxをstudentに渡す処理
        this.makingIdx();
        this.doShuffled();
      }
      //共通の処理
      this.btn = "シャッフル";
    },
    genderateStudents: function() {
      for (let i = 0; i < this.studentsNum; i++) {
        let studentNum = this.students.length;
        let newStudent = {
          id: studentNum + 1,
          gender: "boy",
          idx: studentNum + 1
        };
        this.students.push(newStudent);
      }
    },
    makingIdx: function() {
      let boyIdx = 0;
      let girlIdx = 0;
      this.students.forEach(student => {
        // studentそれぞれにgenderがboyかgirlかチェックする
        if (student.gender === "boy") {
          // ここにboysArrayのidxを追加していく
          student.idx = boyIdx;
          boyIdx += 1;
        } else {
          // ここにgirlsArrayのidxを追加していく
          student.idx = girlIdx;
          girlIdx += 1;
        }
      });
    },
    addBoys: function() {
      let boys = this.students.filter(student => {
        return student.gender === "boy";
      });
      this.boysArray = boys;
    },
    addGirls: function() {
      let girls = this.students.filter(student => {
        return student.gender === "girl";
      });
      this.girlsArray = girls;
    },
    isBoysArray: function(studentIdx) {
      return this.boysArray[studentIdx].id;
    },
    isGirlsArray: function(studentIdx) {
      return this.girlsArray[studentIdx].id;
    },
    doShuffled: function() {
      this.boysArray = _.shuffle(this.boysArray);
      this.girlsArray = _.shuffle(this.girlsArray);
    },
    changeGender: function(student) {
      if (student.gender === "boy") {
        // 女にする
        student.gender = "girl";
        this.makingIdx();
        this.addBoys();
        this.addGirls();
      } else {
        //男にする
        student.gender = "boy";
        this.makingIdx();
        this.addBoys();
        this.addGirls();
      }
    },
    doClear: function() {
      this.students = [];
      this.btn = "セットアップ";
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  width: 620px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  background: #dfdf;
  padding-right: 40px;
  li {
    width: 70px;
    height: 70px;
    line-height: 70px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
  }
  .boy {
    display: inline-block;
    // padding: 0.5em 1em;
    text-decoration: none;
    background: #1ca3eb; /*ボタン色*/
    color: #fff;
    border-bottom: solid 4px #627295;
    border-radius: 10px;
  }
  .boy:active {
    /*ボタンを押したとき*/
    -webkit-transform: translateY(4px);
    transform: translateY(4px); /*下に動く*/
    border-bottom: none; /*線を消す*/
  }
  .girl {
    display: inline-block;
    // padding: 0.5em 1em;
    text-decoration: none;
    background: #fa5fe0; /*ボタン色*/
    color: #fff;
    border-bottom: solid 4px #a23890;
    border-radius: 10px;
  }
  .girl:active {
    /*ボタンを押したとき*/
    -webkit-transform: translateY(4px);
    transform: translateY(4px); /*下に動く*/
    border-bottom: none; /*線を消す*/
  }
}
.w-150 {
  width: 150px;
}

@media screen and (max-width: 767px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  ul {
    width: 250px;
    margin: 0 auto;
    padding: 0px;
    li {
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
