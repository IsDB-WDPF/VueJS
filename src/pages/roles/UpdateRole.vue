
<script setup>

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import api from '@/Api';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const { id } = useRoute().params;
console.log(id);

const router= useRouter();
const formData= reactive({
    id:"",
    name:""
});

// formData.id = id;
onMounted(() => {
    fetchRole()
});

const fetchRole = () => {
    api.get(`/roles/`+id)
        .then((result) => {
            console.clear();
            console.log(result.data);
            formData.id=  result.data.id
            formData.name=  result.data.name
        }).catch((err) => {
            console.log(err);
        });
}

const submitData= ()=>{

    api.put("/roles/"+formData.id, formData)
    .then((result) => {
        console.log(result.data);
        // router.push('/roles');
    }).catch((err) => {
        console.log(err);
    });


}
console.log(formData);


</script>




<template>
    <div class="row">
        <!-- Baisc Form Controls start -->
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5>Update Roles</h5>
                </div>
                  <!-- {{ formData }} -->
                <div class="card-body">
                    <form @submit.prevent="submitData">
                        <div class="app-form">
                            <div class="mb-3">
                                <label for="username" class="form-label">name</label>
                                <input v-model="formData.name" type="text" class="form-control" placeholder="Enter Your Username" id="username">
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>



</template>

<style scoped>

</style>