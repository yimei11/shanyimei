<template>
    <div>
        <!-- 添加用户 -->
        <el-button type="primary" class="addbtn" @click="addfn">编辑添加，字段各种规则验证</el-button>
        <el-table :data="arrs">
            <el-table-column prop="title" label="文章标题"> </el-table-column>
            <el-table-column prop="name" label="作者"> </el-table-column>
            <el-table-column prop="browser" label="浏览器"> </el-table-column>
            <el-table-column prop="text" label="回复"> </el-table-column>
            <el-table-column label="操作">
                <!-- 删除 -->
                <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 弹窗 -->
        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="品牌名称" :label-width="formLabelWidth">
                    <el-input auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="浮点（2位）" :label-width="formLabelWidth">
                    <el-input autocomplete="no" placeholder="非必填的浮点（2位）字符串规则验证"></el-input>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="机构地址" :label-width="formLabelWidth">
                    <el-input autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="管理员手机号" :label-width="formLabelWidth">
                    <el-input autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import instance from '../api/index.js'
export default {
    name:"ArticleList",
    data(){
        return {
            arrs:null,
            dialogFormVisible: false, // 弹窗默认隐藏
            form: {
                title:"",
                name: "",
                browser:"",
                text: "",
            },
            formLabelWidth: "100px",
        }
    },
    methods:{
        handleDelete(i,n){
            this.$confirm("你确定删除该条信息吗？", "提示", {
                confirmButtonText: "",
                cancelButtonText: "",
                type: "warning",
            })
            .then(() => {
                this.deletedata(i);
            })
            .catch(() => {
                console.log("取消");
            });
        },
        // 获取数据
        async getdata(){
            let {data} = await instance.get('/article')
            this.arrs = data
        },
        // 删除数据
        async deletedata(id){
            let {data} = await instance.delete('/article/'+id)
            console.log(data)
            this.getdata()
        },
        // 添加按钮
        addfn(){
            this.dialogFormVisible = !this.dialogFormVisible
        }
    },
    created(){
        this.getdata()
    }
}
</script>