import Vue from "vue";

export default {
  catalogue_path_as_objects(this_){
    var matched = this_.$route.matched
    var catalogue_hierarchy = this_.$store.state.catalogue.catalogue_hierarchy

    var objects_list = []

    if(matched.length < 2){
      return objects_list
    }


    if(matched[1].name === 'catalogue_search'){
      objects_list.push(catalogue_hierarchy)
      objects_list.push({
        name:'search',
        title:'Поиск'
      })
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START CATALOGUE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    else if(matched[1].name === 'catalogue_root'){
      objects_list.push(catalogue_hierarchy)

      if(matched.length < 3){
        return objects_list
      }

      var params = this_.$route.params

      if(params.hasOwnProperty('category_lvl1')){
        let this_name = params.category_lvl1
        let children = catalogue_hierarchy.children
        let idx = -1

        for(let i = 0; i < children.length; i++){
          let child = children[i]
          if (child.name === this_name){
            idx = i
            break
          }
        }

        if (idx !== -1){
          objects_list.push(children[idx])
        }else{
          return objects_list
        }
      }

      if(params.hasOwnProperty('category_lvl2')){
        let this_name = params.category_lvl2
        let children = objects_list[1].children
        let idx = -1

        for(let i = 0; i < children.length; i++){
          let child = children[i]
          if (child.name === this_name){
            idx = i
            break
          }
        }

        if (idx !== -1){
          objects_list.push(children[idx])
        }else{
          return objects_list
        }
      }

      //todo: improve

      if(params.hasOwnProperty('catalogue_item')){
        objects_list.push(this_.$store.state.catalogue.catalogue_item)
      }
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END CATALOGUE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return objects_list
  },

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  get_catalogue_as_objects_by_ids(this_, catalogue_lvl1_id, catalogue_lvl2_id){
    var objects_list = []

    var list = this_.$store.state.catalogue.catalogue_hierarchy.children
    var idx = -1

    for(let i = 0; i < list.length; i++){
      let item = list[i]
      if (item.id === catalogue_lvl1_id){
        idx = i
        break
      }
    }

    if (idx !== -1){
      objects_list.push(list[idx])
    }else{
      return objects_list
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    list = objects_list[0].children
    idx = -1

    for(let i = 0; i < list.length; i++){
      let item = list[i]
      if (item.id === catalogue_lvl2_id){
        idx = i
        break
      }
    }

    if (idx !== -1){
      objects_list.push(list[idx])
    }

    return objects_list
  },

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  async is_error(data, root_state, context){
    var account = root_state.account

    if (data.hasOwnProperty('error')){
      var error = data.error

      if(error === 'token expired'){
        if(account.is_logged_in){
          if(account.is_tmp_user){
            alert('Время анонимной сессии истекло! Корзина очищена')
          }else{
            alert('Время пользовательской сессии истекло! Произведен выход из аккаунта')
          }
          await context.dispatch('logout')
        }else{
          console.log('Oops, that is strange. Not logged in account but got "token expired" error')
        }
        return true

      }else if(error === 'wrong token'){
        if(account.is_logged_in){
          if(account.is_tmp_user){
            alert('Сбой анонимной сессии! Корзина очищена')
          }else{
            alert('Сбой пользовательской сессии! Произведен выход из аккаунта')
          }
          await context.dispatch('logout')
        }else{
          //occurs on failed login
          //pass
        }
        return true
      }else{
        console.log(data.error)
        return false
      }
    }
    return false
  },

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

