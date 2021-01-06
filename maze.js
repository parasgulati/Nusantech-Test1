function drawMaze(n)
{
	var i,j;
	var flag=0;
	var except;
	for(i=0;i<n;i++)
	{
		row="";
		if(i%2==0)
		{
			if(flag==0)
			{
				except = 1;
				flag=1;
			}
			else
			{
				if(n>=2)
				{
					except = n-2;
					flag=0;
				}
			}
			for(j=0;j<n;j++)
			{
				if(j==except)
				{
					row=row+" ";
				}
				else
				{
					row=row+"@";
				}
			}
		}
		else
		{
			row=row+"@";
			for(j=1;j<n-1;j++)
			{
				row=row+" ";
			}
			row=row+"@";
		}
		console.log(row);
	}
}
drawMaze(15);
