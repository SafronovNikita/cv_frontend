<template>
  <div class="main-wrapper">

    <div class="column left">
      <div class="name">
        {{cv_data_local.name}}
      </div>
      <div class="image-wrapper">
        <img src="/static/photo.jpg" style="width: 100%">
      </div>
      <div class="contacts">
        <div>Контакты</div>
        <div>{{cv_data.invariant.phone}}</div>
        <div>{{cv_data.invariant.email}}</div>
      </div>

      <div class="header">{{lang === LANGUAGES.RU ? 'Навыки' : 'SKILLS'}}</div>

      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START LANGUAGE SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <table class="ui table">
        <tr>
          <td
            :rowspan="cv_data_local.language_skills.length + 1"
            class="caption"
          >
            {{lang === LANGUAGES.RU ? 'Языки' : 'Language skills'}}
          </td>
        </tr>
        <tr v-for="language_skill in cv_data_local.language_skills">
          <td>{{language_skill[0]}}</td>
          <td>{{language_skill[1]}}</td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END LANGUAGE SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START IT SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <table class="ui table">
        <tr>
          <td
            :rowspan="cv_data.invariant.it_skills.length + 1"
            class="caption"
          >
            {{lang === LANGUAGES.RU ? 'IT-навыки' : 'IT skills'}}
          </td>
        </tr>
        <tr v-for="it_skill in cv_data.invariant.it_skills">
          <td>{{it_skill[0]}}</td>
          <td>
            <div class="subskill-list">
              <div v-for="(subskill, idx) in it_skill[1]" class="item">
                {{subskill}}{{ (idx === it_skill[1].length - 1) ? '' : ',' }}
              </div>
            </div>
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END IT SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START TECH SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <table class="ui table">
        <tr>
          <td
            :rowspan="cv_data.invariant.tech_skills.length + 1"
            class="caption"
          >
            {{lang === LANGUAGES.RU ? 'Технические навыки' : 'Tech skills'}}
          </td>
        </tr>
        <tr v-for="tech_skill in cv_data.invariant.tech_skills">
          <td>{{tech_skill[0]}}</td>
          <td>
            <div class="subskill-list">
              <div v-for="(subskill, idx) in tech_skill[1]" class="item">
                {{subskill}}{{ (idx === tech_skill[1].length - 1) ? '' : ',' }}
              </div>
            </div>
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END TECH SKILLS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START ACHIEVEMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="header">{{lang === LANGUAGES.RU ? 'Достижения' : 'HONORS AND AWARDS'}}</div>

      <table class="ui table">
        <tr v-for="row in make_achievements_rows">
          <td :class="row.classes" :rowspan="row.rowspan">
            {{row.value}}
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END ACHIEVEMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START INTERESTS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="header">{{lang === LANGUAGES.RU ? 'Увлечения' : 'Hobbies'}}</div>

      <table class="ui table">
        <tr v-for="hobby in cv_data_local.hobbies">
          <td class="caption">
            {{hobby.subject}}
          </td>
          <td>
            <div class="subskill-list">
              <div v-for="(subskill, idx) in hobby.values" class="item">
                {{subskill}}{{ (idx === hobby.values.length - 1) ? '' : ',' }}
              </div>
            </div>
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END INTERESTS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    </div>

    <div class="column right">
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="header">{{lang === LANGUAGES.RU ? 'Образование' : 'EDUCATION AND ACADEMICS'}}</div>

      <table class="no-border-table">
        <tr v-for="place in cv_data_local.education_exp">
          <td>
            <div style="font-weight: bold">
              {{place.name}}
            </div>
            <div class="ui bulleted list">
              <div
                v-for="fact in place.facts"
                class="item"
              >
                {{fact}}
              </div>
            </div>
          </td>
          <td class="dates">
            {{place.period}}
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~-->

      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START EMPLOYMENT~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="header">{{lang === LANGUAGES.RU ? 'Опыт работы' : 'EMPLOYMENT EXPERIENCE'}}</div>

      <table class="no-border-table">
        <tr v-for="place in cv_data_local.employment_exp">
          <td>
            <div class="caption">
              {{place.name}}
            </div>
            <div class="subcaption">
              {{place.position}}
            </div>
            <div class="ui bulleted list">
              <div
                v-for="fact in place.facts"
                class="item"
              >
                {{fact}}
              </div>
            </div>
          </td>
          <td class="dates">
            {{place.period}}
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END EMPLOYMENT~~~~~~~~~~~~~~~~~~~~~~~~~~-->

      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START PROJECTS~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="header">{{lang === LANGUAGES.RU ? 'Проекты' : 'Activities'}}</div>

      <table class="no-border-table">
        <tr v-for="place in cv_data_local.projects_exp">
          <td>
            <div class="caption">
              {{place.name}}
            </div>
            <div class="subcaption">
              {{place.status}}
            </div>
            <div class="ui bulleted list">
              <div
                v-for="fact in place.facts"
                class="item"
              >
                {{fact}}
              </div>
            </div>
          </td>
          <td class="dates">
            {{place.period}}
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END PROJECTS~~~~~~~~~~~~~~~~~~~~~~~~~~-->

      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~START SELF EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="header">{{lang === LANGUAGES.RU ? 'Самообразование' : 'Self Education'}}</div>

      <table class="no-border-table">
        <tr v-for="place in cv_data_local.self_education_exp">
          <td>
            <div class="caption">
              {{place.name}}
            </div>
            <a class="subcaption" :href="place.link" target="_blank">
              Ссылка на профиль
            </a>
            <div class="ui bulleted list">
              <div
                v-for="fact in place.facts"
                class="item"
              >
                {{fact}}
              </div>
            </div>
          </td>
          <td class="dates">
            {{place.period}}
          </td>
        </tr>
      </table>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~END SELF EDUCATION~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    </div>

  </div>
</template>

<script>
  import cv_data from './cv_data.js'

  export default {
    data(){
      return {
        cv_data:cv_data,

        lang:null,
        LANGUAGES:this.$store.state.LANGUAGES,
        cv_data_local:null,
      }
    },
    computed:{
      make_achievements_rows(){
        var achievements = this.cv_data_local.achievements

        var rows = []

        for (var i = 0; i < achievements.length; i++){
          var achievement = achievements[i]
          var events = achievement.events

          rows.push({
            rowspan:events.length+1,
            classes:{caption:true},
            value:achievement.year
          })

          for (var j = 0; j < events.length; j++){
            var event = events[j]

            rows.push({
              rowspan:1,
              classes:{},
              value:event
            })
          }
        }
        return rows
      },
    },
    created() {
      var lang = this.$route.params.lang

      this.lang = lang
      this.cv_data_local = this.cv_data[lang]
    }
  }
</script>

<style scoped>
  .main-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 25px;

    font-size: 15px;
  }

  .column{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .column.left,.column.right{
    margin: 0 25px 0;
  }
  .column.left{
    width: 250px;
  }
  .column.right{
    width: 650px;
  }
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  .header{
    width: 100%;
    margin: 5px 0 5px;
    padding: 3px 10px;

    font-size: 18px;
    font-weight: bold;

    background-color: var(--blue-light);
  }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  .ui.table{
    margin: 5px 0;
    width: 100%;
  }
  .ui.table td{
    padding: 3px;
  }

  .no-border-table{
    width: 100%;
  }

  .caption{
    font-weight: bold;
  }
  .subcaption{
    font-weight: bold;
    font-style: italic;
    color: var(--grey);
  }

  table td.caption{
    vertical-align: top;
  }

  table td.dates{
    vertical-align: top;
    word-break: keep-all;
    white-space: nowrap;
  }

  table .ui.bulleted.list{
    margin-top: 5px;
    margin-bottom: 10px;
  }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  .subskill-list{
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;

    font-size: 0.9rem;
    color: var(--grey);
  }

  .subskill-list .item{
    margin: 0 5px 0;
  }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  .name{
    font-size: 20px;
    font-weight: bold;
  }

  .image-wrapper{
    padding: 5px 20px;
  }

  .contacts{
    display: flex;
    flex-direction: column;
    align-items: center;

    font-weight: bold;
  }

</style>
