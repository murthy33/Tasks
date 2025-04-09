import React,{useState} from 'react'
import '../Styles/TasksComponent.css';
import Card from './Card';

const TasksComponent=({ searchQuery })=> {
    const [selectedAssigneeId, setSelectedAssigneeId] = useState(null);
    const [selectedPersonData, setSelectedPersonData] = useState(null);
    const data=[
        {id:1,TaskName:'Create Login page',Deadline:'05 Apr 2025',Status:'Active',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=30',Name:'John',Dept:'Team Lead'},
        {id:2,TaskName:'Create Detail page',Deadline:'08 Apr 2025',Status:'Assigned',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=2' ,Name:'Michael',Dept:'Project Manager'},
        {id:3,TaskName:'Create Signup page',Deadline:'05 May 2025',Status:'In Progress',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=3' ,Name:'Steve',Dept:'Product Manager'},
        {id:4,TaskName:'Create Cart page',Deadline:'15 Aug 2025',Status:'Stopped',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=4' ,Name:'Bill Gates',Dept:'Technical Architect'},
        {id:5,TaskName:'Create Products page',Deadline:'27 May 2025',Status:'Unassign',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=5' ,Name:'Tim Cook',Dept:'Program Manager'},
        {id:6,TaskName:'Create Payments page',Deadline:'16 Aug 2025',Status:'In Progress',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=6' ,Name:'Satya Nadella',Dept:'Head of Product'},
        {id:7,TaskName:'Create Navbar page',Deadline:'13 Jun 2025',Status:'Stopped',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=7' ,Name:'Sundar Pichai',Dept:'Project Manager'},
        {id:8,TaskName:'Create Footer page',Deadline:'23 Apr 2025',Status:'Active',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=8' ,Name:'Sundar Pichai',Dept:'Product Manager'},
        {id:9,TaskName:'Create Home page',Deadline:'19 Jul 2025',Status:'Assigned',WorkingTime:'00:45:14',Assignee:'https://i.pravatar.cc/40?img=9' ,Name:'Elon Musk',Dept:'Program Manager'},
    ];

    const filteredData=data.filter(item=>item.TaskName.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));

    const handleAssigneeClick = (person) => {
        setSelectedAssigneeId(prev => prev === person.id ? null : person.id);
        setSelectedPersonData(person);
      };

  return (
    <div>
        <h1 className='title'>Tasks</h1>
        <div className='table-container'>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th className='taskname'>Task Name</th>
                        <th className='deadline'>Deadline</th>
                        <th className='status'>Status</th>
                        <th className='workingtime'>Working Time</th>
                        <th className='assignee'>Assignee</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((person)=>(
                        <tr key={person.id}
                            className={selectedAssigneeId===person.id ? 'selected-row' : 'default-row'} 
                        >
                            <td><input type="checkbox" className="task-checkbox" /></td>
                            <td className='taskname'>
                            {person.TaskName}
                            </td>
                            <td className='deadline'>{person.Deadline}</td>
                            <td className='status'>
                                <span className={`status-cell ${
                                    person.Status === 'Active' ? 'status-active' :
                                    person.Status === 'Assigned' ? 'status-assigned' :
                                    person.Status === 'In Progress' ? 'status-inprogress' :
                                    person.Status === 'Stopped' ? 'status-stopped' :
                                    person.Status === 'Unassign' ? 'status-unassign' : ''
                                    }`}>
                                    {person.Status}
                                </span>
                            </td>
                            <td className='workingtime'>{person.WorkingTime}</td>
                            <td className='assignee'>
                                <div className='assigne-wrapper'>
                                    <img
                                        src={person.Assignee}
                                        alt='assignee'
                                        className='assignee-img'
                                        onClick={()=>handleAssigneeClick(person)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    {
                                        selectedAssigneeId===person.id && (
                                            <div className='card-popup'>
                                                <Card selectedImage={person.Assignee} Name={person.Name} Dept={person.Dept}/>
                                                
                                            </div>
                                        )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            

        </div>
    </div>
  )
}

export default TasksComponent
