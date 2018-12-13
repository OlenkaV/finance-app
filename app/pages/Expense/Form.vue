<template>
    <StackLayout ref="page">
        <StackLayout class="form">
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.item.category == '')?'field invalid' : 'field'"
                    @tap="chooseCategory()"
                    editable="false"
                    hint="Category"
                    keyboardType="account"
                    returnKeyType="next"
                    v-model="item.category"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.item.account == '')?'field invalid' : 'field'"
                    @tap="chooseAccount()"
                    editable="false"
                    hint="Account"
                    keyboardType="account"
                    returnKeyType="next"
                    v-model="item.account"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.item.price == '')?'field invalid' : 'field'"
                    hint="Sum"
                    keyboardType="number"
                    returnKeyType="next"
                    v-model="item.price"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    :class="(this.onSubmit && this.item.comment == '')?'field invalid' : 'field'"
                    hint="Comment"
                    keyboardType="comment"
                    returnKeyType="next"
                    v-model="item.comment"
                    autocorrect="false" required></TextField>
            </StackLayout>
            
            <Button
                class="btn btn-primary"
                @tap="submit()">Add</Button>
        </StackLayout>
    </StackLayout>
</template>

<script>

export default {
    name: 'Profit',
    data() {
        return {
            onSubmit: false,
            item: {
                category: '',
                account: '',
                price: '',
                comment: ''
            }
        }
    },
    computed: {
        accounts() {
            return this.$store.state.account.list;
        },
        categories() {
            return this.$store.state.expenseCategory.list;
        }
    },
    mounted() {
        this.$store.dispatch('account/fetchAll');
        this.$store.dispatch('expenseCategory/fetchAll');
    },
    methods: {
        submit() {
            var valid = true;
            this.onSubmit = true;
            
            valid = (this.item.category == '') ? false : true;
            valid = (this.item.account == '') ? false : true;
            valid = (this.item.price == '') ? false : true;
            valid = (this.item.comment == '') ? false : true;
            
            var data = {
                category: this.item.category,
                account: this.item.account,
                price: this.item.price,
                comment: this.item.comment,
                date: '30.12'
            }
            
            if(valid) {
                this.$store.dispatch('expense/add', data);

                this.$router.push({ name: 'ExpenseList' });
            }
        },
        chooseCategory() {
            var _this = this;
            var array = this.categories;
            var flags = [], output = [], l = array.length, i;
            for( i=0; i<l; i++) {
                if( flags[array[i].title]) continue;
                flags[array[i].title] = true;
                output.push(array[i].title);
            }
            
            action("Choose Category", "Cancel", output)
            .then(result => {
                if(result != 'Cancel') {
                    _this.item.category = result;
                }
            })
        },
        chooseAccount() {
            var _this = this;
            var array = this.accounts;
            var flags = [], output = [], l = array.length, i;
            for( i=0; i<l; i++) {
                if( flags[array[i].title]) continue;
                flags[array[i].title] = true;
                output.push(array[i].title);
            }
            
            action("Choose Account", "Cancel", output)
            .then(result => {
                if(result != 'Cancel') {
                    _this.item.account = result;
                }
            })
        }
    }
}
</script>

<style>
.field {
    border-left-color: #ffffff; 
    border-left-width: 3;
    
    border-bottom-width: 1;
    border-bottom-color: #000000; 
}
.invalid {
    border-left-color: #ff5500; 
    border-left-width: 3;
    
    border-bottom-width: 1;
    border-bottom-color: #ff5500; 
}
</style>