
#include "counter.h"

int main (void)
{
	start_message();
	timer_init(TIMER_0_BASE, TIMER_0_IRQ_INTERRUPT_CONTROLLER_ID, TIMER_0_IRQ);
	timer_set_period(TIMER_0_LOAD_VALUE*1000);
	while (1)
	{

	}
	return 0;
}
