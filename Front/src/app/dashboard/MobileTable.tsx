import React from 'react';

interface MobileTableProps {
    movements: Movement[];
    getStatusClass: (status: string) => string;
}

interface Movement {
    id: number;
    name: string;
    typeOf: string;
    status: string;
    amount: number;
}

const MobileTable: React.FC<MobileTableProps> = ({ movements, getStatusClass }) => {
    return (
        <div className="font-inter ">
            <section>
                <table className="w-full overflow-y-auto">
                    <tbody className=" flex flex-col gap-5">
                        {movements.map((movement: Movement) => (
                            <tr className="bg-[#161616]  text-[0.875rem] rounded-[0.625rem] flex justify-between items-center p-5" key={movement.id}>
                                <td className="flex flex-col gap-1">
                                    <p>{movement.name}</p>
                                    <p>{movement.typeOf}</p>
                                </td>
                                <td className={getStatusClass(movement.status)}>{movement.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default MobileTable;
