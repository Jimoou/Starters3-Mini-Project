class GradeModel {
    first_multi: string;
    first_task: string;
    second_multi: string;
    second_task: string;
    third_multi: string;
    third_task: string;
    final_multi: string;
    final_task: string;
    capabilities: string;
    submit: string;
    final: string;
    total: string;
    Rank: string;

    constructor(
        first_multi: string,
        first_task: string,
        second_multi: string,
        second_task: string,
        third_multi: string,
        third_task: string,
        final_multi: string,
        final_task: string,
        capabilities: string,
        submit: string,
        final: string,
        total: string,
        Rank: string,
    ) {
        this.first_multi = first_multi;
        this.first_task = first_task;
        this.second_multi = second_multi;
        this.second_task = second_task;
        this.third_multi = third_multi;
        this.third_task = third_task;
        this.final_multi = final_multi;
        this.final_task = final_task;
        this.capabilities = capabilities;
        this.submit = submit;
        this.final = final;
        this.total = total;
        this.Rank = Rank;
    }
}

export default GradeModel;