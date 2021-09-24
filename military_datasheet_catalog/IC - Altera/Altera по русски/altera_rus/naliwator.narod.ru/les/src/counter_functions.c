#include "counter.h"

static alt_u32 timer_base;
static alt_u32 timer_interrupt;
static alt_u32 timer_irq;
static alt_u8 led = 0;

void start_message (void)
{
	printf("program load\n");
}

#ifdef TIMER_0_BASE
	static void handle_timer_0_interrupts(void* context)
	{
		IOWR_ALTERA_AVALON_TIMER_STATUS(timer_base, 0); //clear flag
		IOWR_ALTERA_AVALON_TIMER_CONTROL(timer_base, 0x2); //disable interrupt

#ifdef PIO_0_BASE
		IOWR_ALTERA_AVALON_PIO_DATA(PIO_0_BASE, led = ~led);
#endif
		IOWR_ALTERA_AVALON_TIMER_CONTROL(timer_base, 0x07); //start timer, enable interrupt
	}

	void timer_init(alt_u32 _base, alt_u32 _interrupt, alt_u32 _irq)
	{
		timer_base = _base; //set static variable value of local variable
		timer_interrupt = _interrupt;
		timer_irq = _irq;

		alt_ic_irq_disable (timer_interrupt, timer_irq);//disable interrupt

		alt_ic_isr_register(timer_interrupt, timer_irq, handle_timer_0_interrupts, NULL, NULL); //ISR timer_sys

	}

	void timer_set_period(alt_u32 timer_period)
	{
		IOWR_ALTERA_AVALON_TIMER_CONTROL(timer_base, 0x08); //stop timer, disable interrupt

		IOWR_ALTERA_AVALON_TIMER_PERIODL(timer_base, timer_period&ALTERA_AVALON_TIMER_PERIODL_MSK);//write timer period l
		IOWR_ALTERA_AVALON_TIMER_PERIODH(timer_base, (timer_period>>16)&ALTERA_AVALON_TIMER_PERIODH_MSK);//write timer period h

		IOWR_ALTERA_AVALON_TIMER_CONTROL(timer_base, 0x07); //start timer, enable interrupt
	}
#endif
