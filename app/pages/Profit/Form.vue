<template>
    <StackLayout ref="page">
        <ActionBar class="action-bar" title="Add new Profit"></ActionBar>
        <StackLayout class="form">
            <StackLayout class="input-field">
                <TextField
                    @tap="chooseCategory()"
                    editable="false"
                    hint="Category"
                    keyboardType="account"
                    returnKeyType="next"
                    v-model="profit.category"
                    autocorrect="false"></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    @tap="chooseAccount()"
                    editable="false"
                    hint="Account"
                    keyboardType="account"
                    returnKeyType="next"
                    v-model="profit.account"
                    autocorrect="false"></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    hint="Sum"
                    keyboardType="sum"
                    returnKeyType="next"
                    v-model="profit.sum"
                    autocorrect="false"></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <TextField
                    hint="Comment"
                    keyboardType="comment"
                    returnKeyType="next"
                    v-model="profit.comment"
                    autocorrect="false"></TextField>
            </StackLayout>
            
            <StackLayout class="input-field">
                <Button
                    class="submit-button"
                    @tap="submit()">Add</Button>
            </StackLayout>
        </StackLayout>
    </StackLayout>
</template>

<script>

export default {
    name: 'Profit',
    data() {
        return {
            profit: {
                category: '',
                account: '',
                sum: '',
                comment: ''
            }
        }
    },
    computed: {
        accounts() {
            return this.$store.state.account.list;
        },
        categories() {
            return this.$store.state.profitCategory.list;
        }
    },
    mounted() {
        this.$store.dispatch('account/fetchAll');
        this.$store.dispatch('profitCategory/fetchAll');
    },
    methods: {
        submit() {
            
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
                    _this.profit.category = result;
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
                    _this.profit.account = result;
                }
            })
        }
    }
}
</script>

<style>

</style>