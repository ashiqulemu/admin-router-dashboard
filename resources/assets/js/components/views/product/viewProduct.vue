<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>View Product List</h4><br>
                    <table class="table table-reflow">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th class="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td class="d-flex justify-content-center align-items-center">
                                <a href="" class="pr-2">
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </a>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "viewProduct"
    }
</script>

<style scoped>

</style>