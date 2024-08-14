const levels = [
    {
        level: 0x1000,
        value: 'Super Admin'
    },
    {
        level: 0x80,
        value: 'Manager'
    },
    {
        level: 0x40,
        value: 'Supervisor'
    },
    {
        level: 0x8,
        value: 'Cashier'
    },
    {
        level: 0x4,
        value: 'Acceptance'
    }
];


export const roleToLevel = (roles: Array<string>) => {
    return levels.filter(({ value }) => {
        return Array.isArray(roles) && roles.indexOf(value) >= 0;
    }).reduce((acc: any, val: any) => {
        acc += parseInt(val.level);
    }, 0)
}

export const levelToRole = (level: number) => {
    return levels.reduce((acc: any, val: any) => {
        if ((val.level & level) > 0) {
            acc.push(val.value);
        }
        return acc;
    }, []).join(', ');
}