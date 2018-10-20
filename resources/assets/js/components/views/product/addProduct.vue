<template>
    <div>

       <div class="container">

                <div class="row">
                    <div class="headerTtile">
                        Add Product
                    </div>
                </div>
           <div class="row shadow p-5 bg-default  ">
                    <div class="col-md-4 ">
                        <div class="form-group">
                            <label class=" label label-default">Product Name </label>
                            <input type="text" class="form-control"   placeholder="product name ">

                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="form-group">
                            <label   class="col-form-label">Product Code </label>
                            <input type="number" class="form-control"   placeholder="product Code ">

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="col-form-label">Select Brand </label>
                            <select  class="form-control">
                                <option value="">option 1</option>
                                <option value="">option 1</option>
                                <option value="">option 1</option>
                                <option value="">option 1</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <label class="col-form-label">Description </label>
                            <textarea name="" id="" cols="5" rows="2" class="form-control"></textarea>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="col-form-label">Select Category </label>
                            <select  class="form-control">
                                <option value="">option 1</option>
                                <option value="">option 1</option>
                                <option value="">option 1</option>
                                <option value="">option 1</option>
                            </select>
                        </div>
                    </div>
           </div>
       </div>



    </div>
</template>

<script>
    export default {
        name: "addProduct"
    }
</script>

<style scoped>

</style>